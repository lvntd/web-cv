import type { ReactNode } from 'react'
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'
import './fonts.ts'
import { colors, px, sans, mono } from './theme.ts'
import { cv } from './cv-data.ts'
import type { Entry as EntryData, RichText } from './types.ts'

const styles = StyleSheet.create({
  page: {
    paddingVertical: '0.6in',
    paddingHorizontal: '0.75in',
    fontFamily: sans,
    fontSize: px(13.5),
    color: colors.body,
    backgroundColor: '#ffffff',
  },

  // ── Header ────────────────────────────────────────────────
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: px(24),
    paddingBottom: px(18),
    borderBottomWidth: px(1),
    borderBottomColor: colors.ink,
  },
  name: {
    fontFamily: sans,
    fontWeight: 600,
    fontSize: px(40),
    letterSpacing: px(40) * -0.02,
    color: colors.ink,
  },
  jobTitle: {
    marginTop: px(12),
    fontFamily: mono,
    fontSize: px(13),
    letterSpacing: px(13) * 0.16,
    textTransform: 'uppercase',
    color: colors.accent,
  },
  contactBlock: { alignItems: 'flex-end', gap: px(4) },
  contactLine: {
    fontFamily: mono,
    fontSize: px(11.5),
    lineHeight: 1.5,
    color: colors.contact,
    textAlign: 'right',
  },
  contactLocation: { color: colors.contact },

  // ── Summary ───────────────────────────────────────────────
  summary: {
    fontSize: px(14.5),
    lineHeight: 1.5,
    color: colors.body,
  },

  // ── Section headings ──────────────────────────────────────
  section: { marginTop: px(22) },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: px(12),
    marginBottom: px(14),
  },
  sectionSquare: { width: px(5), height: px(5), backgroundColor: colors.accent },
  sectionLabel: {
    fontFamily: mono,
    fontSize: px(11),
    fontWeight: 500,
    letterSpacing: px(11) * 0.2,
    textTransform: 'uppercase',
    color: colors.label,
  },
  sectionRule: { flex: 1, height: px(1), backgroundColor: colors.line },

  // ── Entries (experience / projects) ───────────────────────
  entry: { marginBottom: px(16) },
  entryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: px(16),
  },
  company: { fontFamily: sans, fontWeight: 600, fontSize: px(15.5), color: colors.ink },
  companySuffix: { fontWeight: 400, color: colors.faint },
  monoMeta: { fontFamily: mono, fontSize: px(11.5), color: colors.faint },
  role: { fontSize: px(13.5), color: colors.sub, marginTop: px(2) },
  paragraph: { marginTop: px(8), fontSize: px(13.5), lineHeight: 1.5, color: colors.body },
  justify: { textAlign: 'justify' },
  bullets: { marginTop: px(9), gap: px(6) },
  bullet: { flexDirection: 'row' },
  bulletMark: {
    width: px(6),
    height: px(1.5),
    marginTop: px(13.5) * 1.5 * 0.42,
    marginRight: px(12),
    backgroundColor: colors.accent,
  },
  bulletText: { flex: 1, fontSize: px(13.5), lineHeight: 1.5, color: colors.body },
  bold: { fontWeight: 600, color: colors.ink },
  medium: { fontWeight: 500, color: colors.ink },
  tech: { marginTop: px(8), fontFamily: mono, fontSize: px(11), color: colors.tech },
  link: { marginTop: px(7), fontFamily: mono, fontSize: px(11.5), color: colors.accent },

  // ── Bottom grid: education / languages / other ────────────
  grid: { flexDirection: 'row', gap: px(40), marginTop: px(24) },
  gridLeft: { flex: 1.35 },
  gridRight: { flex: 1 },
  eduItem: { marginBottom: px(12) },
  eduSchool: { fontFamily: sans, fontWeight: 600, fontSize: px(14.5), color: colors.ink },
  eduDegree: { fontSize: px(13.5), color: colors.sub, marginTop: px(1) },
  eduMeta: { fontFamily: mono, fontSize: px(11), color: colors.faint, marginTop: px(2) },
  langList: { gap: px(9), marginBottom: px(18) },
  langRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: px(10),
  },
  langName: { fontSize: px(13.5), color: colors.ink },
  langLevel: { fontFamily: mono, fontSize: px(10.5), color: colors.faint },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: px(6) },
  chip: {
    fontFamily: mono,
    fontSize: px(10.5),
    color: colors.sub,
    borderWidth: px(1),
    borderColor: colors.line,
    borderRadius: px(4),
    paddingVertical: px(3),
    paddingHorizontal: px(7),
  },
})

// Renders a string, or an array of rich segments ({ text, bold | medium | muted }).
function Rich({ children }: { children: RichText }) {
  if (typeof children === 'string') return <>{children}</>
  return children.map((seg, i) => {
    if (typeof seg === 'string') return <Text key={i}>{seg}</Text>
    const style = seg.bold ? styles.bold : seg.medium ? styles.medium : seg.muted ? styles.companySuffix : undefined
    return (
      <Text key={i} style={style}>
        {seg.text}
      </Text>
    )
  })
}

function SectionHeading({ children, rule = true }: { children: ReactNode; rule?: boolean }) {
  return (
    <View style={styles.sectionHeading}>
      <View style={styles.sectionSquare} />
      <Text style={styles.sectionLabel}>{children}</Text>
      {rule && <View style={styles.sectionRule} />}
    </View>
  )
}

function Entry({ entry, last }: { entry: EntryData; last: boolean }) {
  // Dates sit next to the role when there is one; otherwise on the first row.
  const firstRowMeta = entry.location ?? (entry.role ? null : entry.dates)
  return (
    <View style={last ? undefined : styles.entry} wrap={false}>
      <View style={styles.entryRow}>
        <Text style={styles.company}>
          {entry.company}
          {entry.companySuffix && <Text style={styles.companySuffix}>{entry.companySuffix}</Text>}
        </Text>
        {firstRowMeta && <Text style={styles.monoMeta}>{firstRowMeta}</Text>}
      </View>
      {entry.role && (
        <View style={styles.entryRow}>
          <Text style={styles.role}>{entry.role}</Text>
          <Text style={styles.monoMeta}>{entry.dates}</Text>
        </View>
      )}
      {entry.paragraphs?.map((p, i) => (
        <Text key={i} style={entry.justify ? [styles.paragraph, styles.justify] : styles.paragraph}>
          <Rich>{p}</Rich>
        </Text>
      ))}
      {entry.bullets && (
        <View style={styles.bullets}>
          {entry.bullets.map((b, i) => (
            <View key={i} style={styles.bullet}>
              <View style={styles.bulletMark} />
              <Text style={styles.bulletText}>
                <Rich>{b}</Rich>
              </Text>
            </View>
          ))}
        </View>
      )}
      {entry.link && <Text style={styles.link}>{entry.link}</Text>}
      {entry.tech && <Text style={styles.tech}>{entry.tech.join(' · ')}</Text>}
    </View>
  )
}

export default function CvDocument() {
  return (
    <Document
      title={`${cv.name} — CV`}
      author={cv.name}
      subject={cv.title}
    >
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{cv.name}</Text>
            <Text style={styles.jobTitle}>{cv.title}</Text>
          </View>
          <View style={styles.contactBlock}>
            {cv.contact.lines.map((line) => (
              <Text key={line} style={styles.contactLine}>{line}</Text>
            ))}
            <Text style={[styles.contactLine, styles.contactLocation]}>{cv.contact.location}</Text>
          </View>
        </View>

        {/* Summary */}
        <Text style={[styles.summary, styles.section]}>
          <Rich>{cv.summary}</Rich>
        </Text>

        {/* Experience */}
        <View style={styles.section}>
          <SectionHeading>Experience</SectionHeading>
          {cv.experience.map((entry, i) => (
            <Entry key={entry.company} entry={entry} last={i === cv.experience.length - 1} />
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <SectionHeading>Projects</SectionHeading>
          {cv.projects.map((entry, i) => (
            <Entry key={entry.company} entry={entry} last={i === cv.projects.length - 1} />
          ))}
        </View>

        {/* Education / Languages / Other */}
        <View style={styles.grid} wrap={false}>
          <View style={styles.gridLeft}>
            <SectionHeading rule={false}>Education</SectionHeading>
            {cv.education.map((edu, i) => (
              <View key={edu.school} style={i === cv.education.length - 1 ? undefined : styles.eduItem}>
                <Text style={styles.eduSchool}>{edu.school}</Text>
                <Text style={styles.eduDegree}>{edu.degree}</Text>
                <Text style={styles.eduMeta}>{edu.meta}</Text>
              </View>
            ))}
          </View>
          <View style={styles.gridRight}>
            <SectionHeading rule={false}>Languages</SectionHeading>
            <View style={styles.langList}>
              {cv.languages.map((lang) => (
                <View key={lang.name} style={styles.langRow}>
                  <Text style={styles.langName}>{lang.name}</Text>
                  <Text style={styles.langLevel}>{lang.level}</Text>
                </View>
              ))}
            </View>
            <SectionHeading rule={false}>Other</SectionHeading>
            <View style={styles.chips}>
              {cv.other.map((skill) => (
                <Text key={skill} style={styles.chip}>{skill}</Text>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
