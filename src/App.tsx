import {
  Gem,
  Watch,
  ShoppingBag,
  Coins,
  Stamp,
  MessageCircle,
  Camera,
  Calculator,
  CalendarCheck,
  MapPin,
  Clock,
  Phone,
  Heart,
  Scale,
  ChevronRight,
  Star,
  Check,
  ChevronDown,
} from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

// カラー定数
const NAVY = "#1a1a50";
const GOLD = "#c9a827";
const LINE_GREEN = "#06c755";

// ヘッダー
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.webp"
              alt="買取大吉"
              className="h-8 md:h-10 w-auto"
            />
            <span className="hidden sm:inline text-sm text-gray-500">山科音羽店</span>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:075-502-1515" className="hidden md:flex items-center gap-3" style={{ color: NAVY }}>
              <FaPhoneAlt className="w-5 h-5" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">075-502-1515</span>
                <span className="text-xs text-gray-500">営業時間 10:00～18:30</span>
              </div>
            </a>
            <a href="https://lin.ee/v9bo8Y6" target="_blank" rel="noopener noreferrer" className="btn-line text-sm py-2 px-4">
              <MessageCircle className="w-4 h-4" />
              <span>LINE査定</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// ① ファーストビュー
function HeroSection() {
  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden bg-[#f5f0e6] md:min-h-[90vh]">
      {/* PC用背景 */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(245,240,230,0.8) 0%, rgba(245,240,230,0.5) 25%, transparent 40%), url('/images/hero.png')",
          backgroundSize: "100% 100%, contain",
          backgroundPosition: "left top, right top",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* SP用背景 */}
      <div
        className="absolute top-0 left-0 right-0 bottom-14 md:hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(245,240,230,0.9) 0%, rgba(245,240,230,0.3) 30%, transparent 50%), url('/images/hero-sp.png')",
          backgroundSize: "100% 100%, auto 100%",
          backgroundPosition: "top center, right bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container max-w-6xl mx-auto px-4 pt-6 pb-[60vw] md:pt-8 md:pb-0 md:flex md:items-start md:min-h-[calc(90vh-100px)] relative z-10">
        <div className="max-w-sm mx-auto md:max-w-md md:mx-0 text-center md:text-left md:bg-gradient-to-br md:from-white/20 md:to-white/10 md:backdrop-blur-md md:rounded-3xl md:p-6 md:border md:border-white/30 md:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
          {/* バッジ */}
          <div
            className="inline-flex items-center gap-2 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 animate-fade-in-up shadow-md"
            style={{ backgroundColor: GOLD }}
          >
            <span>新年整理・無料査定キャンペーン</span>
          </div>

          {/* メインコピー */}
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 animate-fade-in-up animation-delay-100" style={{ color: NAVY }}>
            新年の整理は、
            <br />
            <span className="whitespace-nowrap"><span style={{ color: GOLD }}>価値を知る</span>ところから。</span>
          </h1>

          <p className="text-base md:text-lg mb-3 animate-fade-in-up animation-delay-200" style={{ color: NAVY }}>
            山科で、いちばん相談しやすい買取店。
          </p>

          <p className="text-sm text-gray-600 mb-6 animate-fade-in-up animation-delay-300">
            金・プラチナ・ブランド品｜「これ、売れるのかな？」から大歓迎です。
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animation-delay-400 justify-center md:justify-start">
            <a href="https://lin.ee/v9bo8Y6" target="_blank" rel="noopener noreferrer" className="btn-line py-3 px-6 shadow-lg">
              <MessageCircle className="w-5 h-5" />
              <span>LINEで無料査定</span>
              <ChevronRight className="w-5 h-5" />
            </a>
            <a href="tel:075-502-1515" className="btn-navy py-3 px-6 shadow-lg">
              <Phone className="w-5 h-5" />
              <span>電話で相談</span>
            </a>
          </div>
        </div>
      </div>

      {/* 信頼バッジ */}
      <div className="py-4 relative z-10" style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["山科区密着", "無料査定", "1点からOK", "相見積もり歓迎"].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-white text-sm">
                <Check className="w-4 h-4" style={{ color: GOLD }} />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ② お悩みセクション
function PainPointsSection() {
  const pains = [
    "使わなくなった指輪やネックレスが出てきた",
    "昔買ったブランドバッグ、今いくらになるのか知りたい",
    "他店に行く前に、まず相場だけ知りたい",
    "買取店は入りにくくて不安",
    "相見積もりでも、嫌な顔をされないか心配",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">新年、こんなお悩みありませんか？</h2>
          <p className="section-subtitle">
            年末年始の片付けや新年の整理で、こんなお声を多くいただいています。
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100"
            >
              <span
                className="flex-shrink-0 w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: NAVY }}
              >
                {index + 1}
              </span>
              <p style={{ color: NAVY }}>{pain}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-8 p-6 rounded-2xl text-center" style={{ backgroundColor: GOLD }}>
          <p className="text-white text-lg font-bold">
            その不安、すべて私たちが受け止めます。
          </p>
        </div>
      </div>
    </section>
  );
}

// ③ 選ばれる理由
function ReasonsSection() {
  const reasons = [
    {
      icon: Heart,
      number: "01",
      title: "「まずは話を聞く」ことを大切にする査定",
      description:
        "お品物には、思い出や背景があります。当店では価格だけでなく、「なぜ売ろうと思ったのか」まで丁寧にお伺いします。無理な買取や、即決を迫ることは一切ありません。",
    },
    {
      icon: Scale,
      number: "02",
      title: "相場に基づいた、正直で分かりやすい査定",
      description:
        "買取大吉本部の全国相場データや、市場動向を踏まえた上で、査定額の根拠を分かりやすくご説明します。「なぜこの金額になるのか」を知ってから、ご判断いただけます。",
    },
    {
      icon: MapPin,
      number: "03",
      title: "店長の顔が見える、地域密着の安心感",
      description:
        "山科で「売るならここ」と思っていただけるよう、地域の方との信頼関係を何より大切にしています。リピーターやご紹介のお客様が多いことも、私たちの強みです。",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">山科の皆さまに選ばれる、3つの理由</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="card text-center">
              <div className="text-4xl font-bold text-gray-200 mb-4">{reason.number}</div>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: NAVY }}
              >
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: NAVY }}>{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ④ 買取品目
function BuybackItemsSection() {
  const items = [
    { icon: Gem, label: "金・プラチナ", note: "指輪・ネックレス・片方だけでもOK" },
    { icon: Gem, label: "昔のアクセサリー", note: "壊れたジュエリーも査定可能" },
    { icon: ShoppingBag, label: "ブランドバッグ", note: "ヴィトン・シャネル・エルメス等" },
    { icon: Watch, label: "時計", note: "動かない時計・古いモデルも" },
    { icon: Stamp, label: "切手・記念硬貨", note: "コレクション品も歓迎" },
    { icon: Coins, label: "その他", note: "「無理かも」と思う物ほどご相談を" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span
            className="inline-block text-white text-sm font-bold px-4 py-1 rounded-full mb-4"
            style={{ backgroundColor: GOLD }}
          >
            1月に特に多い買取品目
          </span>
          <h2 className="section-title">新年整理でご相談が多いお品物</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="card text-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: `${NAVY}10` }}
              >
                <item.icon className="w-6 h-6" style={{ color: NAVY }} />
              </div>
              <h3 className="font-bold mb-1" style={{ color: NAVY }}>{item.label}</h3>
              <p className="text-sm text-gray-500">{item.note}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8">
          「これは無理かも…」と思う物ほど、ぜひご相談ください
        </p>
      </div>
    </section>
  );
}

// ⑤ LINE査定フロー
function LineFlowSection() {
  const steps = [
    { icon: MessageCircle, num: "1", title: "公式LINEを友だち追加" },
    { icon: Camera, num: "2", title: "お品物の写真を送信" },
    { icon: Calculator, num: "3", title: "仮査定額をご連絡" },
    { icon: CalendarCheck, num: "4", title: "納得できたら来店予約" },
  ];

  return (
    <section id="line" className="py-16 md:py-24" style={{ backgroundColor: LINE_GREEN }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            来店前に、LINEで金額の目安がわかります
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block mb-3">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <step.icon className="w-8 h-8" style={{ color: LINE_GREEN }} />
                </div>
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 text-white text-sm font-bold rounded-full flex items-center justify-center"
                  style={{ backgroundColor: NAVY }}
                >
                  {step.num}
                </span>
              </div>
              <p className="text-white font-bold text-sm">{step.title}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["相談だけでもOK", "しつこい営業なし", "来店がスムーズ"].map((text, i) => (
            <span key={i} className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              {text}
            </span>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://lin.ee/v9bo8Y6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            style={{ color: LINE_GREEN }}
          >
            <MessageCircle className="w-6 h-6" />
            <span>LINE で無料査定する</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ⑥ お客様の声
function TestimonialsSection() {
  const testimonials = [
    {
      text: "亡くなった父の遺品だった金のブレスレットがあったのですが、使わないので売ろうと思い、Googleマップで検索したところ山科にある買取大吉さんを見つけました。古くてボロボロだったのにも関わらず、かなり高く買っていただきました。",
      rating: 5,
    },
    {
      text: "使わないカバンを持っていきました。想像以上の価格で買い取っていただいたので満足です。メルカリなどのフリマサイトはありますが、やり方がいまいち分からないので、丁寧な接客をしていただき助かりました。",
      rating: 5,
    },
    {
      text: "OMEGAの時計を持ち込んだのですが、こういったお店は初めてで、ネットで調べて行ったのですが、クチコミ通りの丁寧な対応で、とても満足のいく買取をしていただきました。悩んでいる人なら、一度は行く価値のあるお店だと思います。",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">実際にご利用いただいたお客様の声</h2>
          <p className="text-gray-500 text-sm">※ Googleマップ口コミより抜粋</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ fill: GOLD, color: GOLD }} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ⑦ よくある質問
function FAQSection() {
  const faqs = [
    { q: "相見積もりでも大丈夫ですか？", a: "もちろんです。他店と比べた上で、納得してお決めください。無理な買取や引き止めは一切ありません。" },
    { q: "1点だけでも大丈夫ですか？", a: "はい、問題ありません。指輪1点、バッグ1点からでも歓迎しています。" },
    { q: "壊れていても買い取れますか？", a: "はい。金・プラチナは状態不問でお値段が付くものも多く、切れている・変形している場合でも査定可能です。" },
    { q: "保証書や箱がなくても大丈夫ですか？", a: "はい、本体のみでも査定可能です。付属品がある場合は、あわせてお持ちいただくと査定額が上がることもあります。" },
    { q: "金かどうかわからないものでも見てもらえますか？", a: "はい、問題ありません。刻印がないものや、素材が不明なものでも無料でお調べします。" },
    { q: "LINE査定をしたら、必ず売らないといけませんか？", a: "いいえ。LINE査定はあくまで「目安の確認」です。金額をご確認いただいた上で、売るかどうかをご判断ください。" },
    { q: "駐車場はありますか？", a: "はい、店舗隣にコインパーキングがございます。場所が分かりにくい場合は、お気軽にお電話またはLINEでお尋ねください。" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">よくある質問</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
              <summary className="flex items-center justify-between p-4 cursor-pointer">
                <span className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: NAVY }}
                  >
                    Q
                  </span>
                  <span className="font-medium text-left" style={{ color: NAVY }}>{faq.q}</span>
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-4 pb-4">
                <div className="flex gap-3 pl-11">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ⑧ 店舗情報
function StoreInfoSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: NAVY }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">店舗情報</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 店舗写真・マップ */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src="/images/store.webp"
                alt="買取大吉 山科音羽店 外観"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src="/images/map.webp"
                alt="買取大吉 山科音羽店 アクセスマップ"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* 店舗詳細 */}
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 text-center border-b pb-4" style={{ color: NAVY }}>
              買取大吉 山科音羽店
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                <div>
                  <p className="text-sm text-gray-500">営業時間</p>
                  <p className="font-medium" style={{ color: NAVY }}>10:00〜18:30</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CalendarCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                <div>
                  <p className="text-sm text-gray-500">定休日</p>
                  <p className="font-medium" style={{ color: NAVY }}>水曜日</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                <div>
                  <p className="text-sm text-gray-500">住所</p>
                  <p className="font-medium" style={{ color: NAVY }}>
                    〒607-8062<br />
                    京都市山科区音羽役出町1-27
                  </p>
                  <p className="text-sm mt-1" style={{ color: GOLD }}>SEIYU駐車場すぐ横</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t flex flex-col gap-3">
              <a href="tel:075-502-1515" className="btn-navy w-full justify-center">
                <Phone className="w-5 h-5" />
                電話で問い合わせ
              </a>
              <a href="https://lin.ee/v9bo8Y6" target="_blank" rel="noopener noreferrer" className="btn-line w-full justify-center">
                <MessageCircle className="w-5 h-5" />
                LINEで予約する
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ⑨ ラストメッセージ
function ClosingSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: NAVY }}>
          新年の整理は、「相談」から始めませんか？
        </h2>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
          売るか迷っている段階でも大丈夫です。<br />
          価値を知るだけで、気持ちが整理されることもあります。<br />
          <span className="font-bold" style={{ color: NAVY }}>まずはお気軽にご相談ください。</span>
        </p>

        <a href="https://lin.ee/v9bo8Y6" target="_blank" rel="noopener noreferrer" className="btn-line text-lg py-4 px-10">
          <MessageCircle className="w-6 h-6" />
          <span>LINEで無料査定・来店予約する</span>
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

// フッター
function Footer() {
  return (
    <footer className="py-8" style={{ backgroundColor: "#0f0f30" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.webp"
              alt="買取大吉"
              className="h-6 w-auto brightness-0 invert"
            />
            <span className="text-white text-sm">山科音羽店</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="/legal" className="hover:text-white transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">© 買取大吉 山科音羽店</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <ReasonsSection />
        <BuybackItemsSection />
        <LineFlowSection />
        <TestimonialsSection />
        <FAQSection />
        <StoreInfoSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}
