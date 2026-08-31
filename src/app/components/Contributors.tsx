import { CONTRIBUTING_URL } from '@/app/lib/site';
import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

/** Per-contributor structural data; role and text live in the dictionaries. */
const CONTRIBUTORS = [
  {
    href: 'https://github.com/TiPunchLabs',
    initials: 'TP',
    handle: 'TiPunchLabs',
    avatarBg: 'bg-pastel-blue',
  },
  {
    href: 'https://github.com/dgkanatsios',
    initials: 'DG',
    handle: '@dgkanatsios',
    avatarBg: 'bg-pastel-gray',
  },
  {
    href: 'https://github.com/aravind4799',
    initials: 'AR',
    handle: '@aravind4799',
    avatarBg: 'bg-pastel-teal',
  },
];

export function Contributors() {
  const { t } = useI18n();

  return (
    <section
      id="contributeurs"
      className="mb-section scroll-mt-24 border-y border-ink/10 bg-section py-section"
    >
      <div className="mx-auto grid max-w-page gap-10 px-6 md:px-8">
        <SectionHeading
          eyebrow={t.contributors.eyebrow}
          title={t.contributors.title}
          lede={t.contributors.lede}
          titleMax="max-w-[24ch]"
          ledeMax="max-w-[58ch]"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTRIBUTORS.map((contributor, i) => {
            const text = t.contributors.items[i];
            if (!text) return null;
            return (
              <Reveal key={contributor.handle} delay={staggerDelay(i)} className="h-full">
                <a
                  href={contributor.href}
                  className="grid h-full content-start gap-3 rounded-[26px] border border-ink/10 bg-paper p-6 text-ink transition-colors hover:border-accent/35"
                >
                  <span
                    aria-hidden="true"
                    className={`grid h-[52px] w-[52px] place-items-center rounded-full text-[17px] font-extrabold tracking-[-0.02em] ${contributor.avatarBg}`}
                  >
                    {contributor.initials}
                  </span>
                  <span className="font-mono text-[14.5px] font-medium">{contributor.handle}</span>
                  <span className="text-[13px] font-bold text-accent">{text.role}</span>
                  <span className="text-sm leading-[1.55] text-ink/70">{text.text}</span>
                </a>
              </Reveal>
            );
          })}
          <Reveal delay={staggerDelay(3)} className="h-full">
            <a
              href={CONTRIBUTING_URL}
              className="grid h-full content-center gap-2.5 rounded-[26px] border-2 border-dashed border-ink/15 p-6 text-ink transition-colors hover:border-accent/40 hover:text-accent"
            >
              <span className="text-[21px] font-bold tracking-[-0.02em]">
                {t.contributors.yourNameTitle}
              </span>
              <span className="text-sm leading-[1.5] text-ink/65">
                {t.contributors.yourNameText}
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
