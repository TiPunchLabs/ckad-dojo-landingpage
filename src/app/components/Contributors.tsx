import { CONTRIBUTING_URL } from '@/app/lib/site';
import { staggerDelay } from '@/app/lib/motion';
import { useI18n } from '@/app/i18n/context';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

/** Per-contributor structural data; role and text live in the dictionaries. */
const CONTRIBUTORS = [
  { href: 'https://github.com/TiPunchLabs', handle: 'TiPunchLabs' },
  { href: 'https://github.com/Sai7Teja', handle: '@Sai7Teja' },
  { href: 'https://github.com/dgkanatsios', handle: '@dgkanatsios' },
  { href: 'https://github.com/aravind4799', handle: '@aravind4799' },
  { href: 'https://github.com/johnwasherecoding', handle: '@johnwasherecoding' },
];

export function Contributors() {
  const { t } = useI18n();

  return (
    <section id="contributeurs" className="scroll-mt-24 border-b border-line bg-ground">
      <div className="mx-auto grid max-w-page gap-8 px-6 py-14 md:px-8">
        <SectionHeading
          index="04"
          eyebrow={t.contributors.eyebrow}
          title={t.contributors.title}
          lede={t.contributors.lede}
          ledeMax="max-w-[66ch]"
        />
        <div className="grid boxed bg-paper sm:grid-cols-2 lg:grid-cols-3">
          {CONTRIBUTORS.map((contributor, i) => {
            const text = t.contributors.items[i];
            if (!text) return null;
            return (
              <Reveal key={contributor.handle} delay={staggerDelay(i)} className="h-full">
                <a
                  href={contributor.href}
                  className={`grid h-full content-start gap-2.5 border-b border-line p-6 text-ink transition-colors hover:bg-ground sm:border-r ${i >= 3 ? 'lg:border-b-0' : ''}`}
                >
                  <span className="font-mono text-sm">{contributor.handle}</span>
                  <span className="mono-label text-[11px] text-accent">{text.role}</span>
                  <span className="text-[13.5px] leading-[1.55] text-muted">{text.text}</span>
                </a>
              </Reveal>
            );
          })}
          <Reveal delay={staggerDelay(3)} className="h-full">
            <a
              href={CONTRIBUTING_URL}
              className="grid h-full content-center gap-2.5 p-6 text-ink transition-colors hover:bg-ground"
            >
              <span className="text-[16.5px] font-semibold tracking-[-0.02em]">
                {t.contributors.yourNameTitle}
              </span>
              <span className="text-[13.5px] leading-[1.55] text-muted">
                {t.contributors.yourNameText}
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
