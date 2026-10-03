export default function IptalIadePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-neutral-800 font-sans py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/80">
        <h1 className="text-3xl font-light mb-6 text-neutral-800">İptal ve İade Koşulları</h1>
        <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
          <p>Satın aldığınız süs eşyaları ve organizasyon paketleri için aşağıdaki iptal ve iade koşulları geçerlidir:</p>
          <h3 className="font-semibold text-neutral-800 pt-2">1. Süs Eşyaları İadesi</h3>
          <p>Kişiye özel hazırlanmayan standart süs eşyalarında teslimat tarihinden itibaren 14 gün içinde iade hakkınız bulunmaktadır.</p>
          <h3 className="font-semibold text-neutral-800 pt-2">2. Organizasyon Paketleri İptali</h3>
          <p>Özel Konsept Paketleri, organizasyon paketlerinde; etkinlik tarihine 7 gün kalaya kadar yapılan iptallerde ücret iadesi yapılır. Özel hazırlık gerektiren durumlarda kesintiler olabilir.</p>
        </div>
        <div className="mt-8 pt-6 border-t border-neutral-100">
          <a href="/" className="text-sm font-medium text-[#8C7A6B] hover:underline">← Ana Sayfaya Dön</a>
        </div>
      </div>
    </main>
  );
}