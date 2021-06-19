import Link from "next/link";

export default function BookOne(props) {
  return (
    <div className="links">
      <Link href="/">Home</Link>
      <Link href="/book01/unit01/themedvocabulary">Themed Vocabulary</Link>
      <Link href="/book01/unit01/grammar">Grammar</Link>
      <Link href="/book01/unit01/themedspeaking">Themed Speaking </Link>
      <Link href="/book01/unit01/translate">Translate</Link>
      <Link href="/book01/unit01/dictation">Dictation</Link>
      <Link href="/book01/unit01/specificvocabulary">Specific Vocabulary</Link>
      <Link href="/book01/unit01/specificspeaking">Specific Speaking</Link>
      <Link href="/book01/unit01/steam">Steam</Link>
      <Link href="/book01/unit01/smartskills">SmartSkills</Link>

      <style jsx>{`
        .links {
          display: flex;
          gap: 2rem;
        }
      `}</style>
    </div>
  );
}
