import { useEffect, useRef, useState } from 'react';
import { GITHUB_REPO, QUICKSTART_URL } from '@/app/lib/site';
import { useI18n } from '@/app/i18n/context';

const VIDEO_SRC = 'media/demo.webm';

const INSTALL_TABS = [
  { id: 'uv', label: 'uv tool', cmd: `uv tool install git+${GITHUB_REPO}.git` },
  { id: 'repo', label: 'clone & run', cmd: `git clone ${GITHUB_REPO}.git && uv run ckad-dojo` },
  { id: 'bash', label: 'bash', cmd: './scripts/ckad-exam.sh web --port 9090' },
] as const;

type InstallTab = (typeof INSTALL_TABS)[number];

export function Hero() {
  const { t } = useI18n();
  const [tab, setTab] = useState<InstallTab>(INSTALL_TABS[0]);
  const [copied, setCopied] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const copy = () => {
    navigator.clipboard?.writeText(tab.cmd).catch(() => {});
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="pb-6 pt-14">
      <div className="mx-auto grid max-w-page items-center gap-10 px-6 md:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div className="grid justify-items-start gap-6">
          <h1 className="w-full min-w-0 max-w-[17ch] text-balance text-[44px] font-extrabold leading-[0.96] tracking-[-0.035em] sm:text-[58px] xl:text-[76px]">
            {t.hero.title}
          </h1>
          <p className="w-full min-w-0 max-w-[52ch] text-[19px] leading-[1.6] text-ink/70">
            {t.hero.lede}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={GITHUB_REPO}
              className="rounded-full bg-accent px-7 py-4 font-bold text-ground transition-colors hover:bg-ink"
            >
              {t.hero.ctaStart}
            </a>
            <a
              href={QUICKSTART_URL}
              className="rounded-full border-2 border-ink/15 px-7 py-4 font-semibold text-ink transition-colors hover:border-ink"
            >
              {t.hero.ctaQuickstart}
            </a>
          </div>
          <div className="grid w-full min-w-0 max-w-[560px] gap-2">
            <div className="flex gap-2">
              {INSTALL_TABS.map((tb) => (
                <button
                  key={tb.id}
                  type="button"
                  onClick={() => {
                    setTab(tb);
                    setCopied(false);
                  }}
                  aria-pressed={tab.id === tb.id}
                  className={`tap-target cursor-pointer rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                    tab.id === tb.id ? 'bg-ink text-ground' : 'bg-ink/5 text-ink/65 hover:bg-ink/10'
                  }`}
                >
                  {tb.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3.5 rounded-[18px] bg-ink px-5 py-[15px] text-ground">
              <span aria-hidden="true" className="font-mono text-amber">
                ❯
              </span>
              <code className="flex-1 overflow-x-auto whitespace-nowrap text-[13.5px]">
                {tab.cmd}
              </code>
              <button
                type="button"
                onClick={copy}
                aria-live="polite"
                className="tap-target shrink-0 cursor-pointer rounded-full bg-paper/15 px-3.5 py-[7px] text-[12.5px] font-semibold text-ground transition-colors hover:bg-amber hover:text-ink focus-visible:outline-amber"
              >
                {copied ? t.hero.copied : t.hero.copy}
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-3.5">
          <div className="relative overflow-hidden rounded-[30px] bg-ink">
            {videoFailed ? (
              <div className="grid min-h-[300px] content-center place-items-center gap-3.5 bg-[repeating-linear-gradient(135deg,rgba(248,249,251,0.05)_0_2px,transparent_2px_12px)] px-8 py-11 text-center">
                <span
                  aria-hidden="true"
                  className="grid h-[58px] w-[58px] place-items-center rounded-full bg-accent text-xl text-ground"
                >
                  ▶
                </span>
                <span className="font-bold text-ground">{t.hero.videoPlaceholderTitle}</span>
                <span className="font-mono text-[12.5px] leading-[1.7] text-paper/55">
                  {t.hero.videoPlaceholderHint}
                </span>
              </div>
            ) : (
              <video
                src={VIDEO_SRC}
                controls
                playsInline
                aria-label={t.hero.videoAria}
                preload="metadata"
                onError={() => setVideoFailed(true)}
                className="block h-auto w-full bg-ink"
              />
            )}
          </div>
          <span className="text-center text-[13px] text-ink/65">{t.hero.caption}</span>
        </div>
      </div>
    </section>
  );
}
