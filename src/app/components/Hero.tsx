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
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-page items-start gap-10 px-6 py-14 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 lg:py-[72px]">
        <div className="grid justify-items-start gap-6">
          <span className="mono-label text-[11.5px] text-muted">{t.hero.eyebrow}</span>
          <h1 className="w-full min-w-0 max-w-[20ch] text-balance text-[38px] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[50px] xl:text-[58px]">
            {t.hero.title}
          </h1>
          <p className="w-full min-w-0 max-w-[56ch] text-[17px] leading-[1.62] text-muted">
            {t.hero.lede}
          </p>
          <div className="flex gap-2.5">
            <a
              href={GITHUB_REPO}
              className="btn bg-accent text-paper transition-colors hover:bg-ink"
            >
              {t.hero.ctaStart}
            </a>
            <a
              href={QUICKSTART_URL}
              className="btn border border-line-strong text-ink transition-colors hover:border-ink"
            >
              {t.hero.ctaQuickstart}
            </a>
          </div>
          <div className="grid w-full min-w-0 max-w-[560px] gap-2">
            <div className="flex gap-1">
              {INSTALL_TABS.map((tb) => (
                <button
                  key={tb.id}
                  type="button"
                  onClick={() => {
                    setTab(tb);
                    setCopied(false);
                  }}
                  aria-pressed={tab.id === tb.id}
                  className={`tap-target cursor-pointer rounded-[5px] border px-3 py-1.5 font-mono text-[11.5px] transition-colors ${
                    tab.id === tb.id
                      ? 'border-accent/40 bg-accent/[0.07] text-accent'
                      : 'border-line text-muted hover:text-ink'
                  }`}
                >
                  {tb.label}
                </button>
              ))}
            </div>
            <div className="flex min-w-0 items-center gap-3 rounded-md bg-ink px-4 py-[13px] text-frost">
              <span aria-hidden="true" className="font-mono text-[13px] text-sky">
                $
              </span>
              <code className="scrollbar-slim min-w-0 flex-1 overflow-x-auto whitespace-nowrap pb-1 text-[13px]">
                {tab.cmd}
              </code>
              <button
                type="button"
                onClick={copy}
                aria-live="polite"
                className="tap-target shrink-0 cursor-pointer rounded border border-paper/25 px-2.5 py-[5px] font-mono text-[11.5px] text-paper/80 transition-colors hover:border-paper hover:text-paper focus-visible:outline-sky"
              >
                {copied ? t.hero.copied : t.hero.copy}
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="boxed bg-ink">
            <div className="flex items-center gap-2.5 border-b border-paper/10 px-3.5 py-2 font-mono text-[11.5px] text-paper/55">
              <span>localhost:9090</span>
              <span aria-hidden="true" className="text-paper/40">
                /
              </span>
              <span>dojo suzaku</span>
              <span className="ml-auto text-sky">120:00</span>
            </div>
            {videoFailed ? (
              <div className="grid min-h-[268px] content-center place-items-center gap-3 bg-[repeating-linear-gradient(135deg,color-mix(in_oklab,var(--color-frost)_4.5%,transparent)_0_2px,transparent_2px_12px)] px-7 py-11 text-center">
                <span
                  aria-hidden="true"
                  className="grid h-[46px] w-[46px] place-items-center rounded-full border border-paper/30 text-[15px] text-frost"
                >
                  ▶
                </span>
                <span className="text-[14.5px] font-medium text-frost">
                  {t.hero.videoPlaceholderTitle}
                </span>
                <span className="font-mono text-[11.5px] leading-[1.7] text-paper/50">
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
          <span className="text-center font-mono text-[11.5px] text-muted">{t.hero.caption}</span>
        </div>
      </div>
    </section>
  );
}
