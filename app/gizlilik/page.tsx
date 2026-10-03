export default function GizlilikPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-neutral-800 font-sans py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/80">
        <h1 className="text-3xl font-light mb-6 text-neutral-800">Gizlilik Politikası</h1>
        <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
          <p>Sema Organizasyon olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu gizlilik politikası, sitemizi ziyaret ettiğinizde ve alışveriş yaptığınızda bilgilerinizin nasıl toplandığını ve korunduğunu açıklar.</p>
          <h3 className="font-semibold text-neutral-800 pt-2">1. Toplanan Bilgiler</h3>
          <p>Sipariş oluşturma ve iletişim süreçlerinde ad-soyad, telefon numarası ve sipariş detaylarınız alınır ve güvenli veritabanımızda saklanır.</p>
          <h3 className="font-semibold text-neutral-800 pt-2">2. Bilgilerin Korunması</h3>
          <p>Toplanan verileriniz üçüncü şahıslarla asla paylaşılmaz ve sadece sizinle olan sipariş/organizasyon sürecini yönetmek için kullanılır.</p>
        </div>
        <div className="mt-8 pt-6 border-t border-neutral-100">
          <a href="/" className="text-sm font-medium text-[#8C7A6B] hover:underline">← Ana Sayfaya Dön</a>
        </div>
      </div>
    </main>
  );
}