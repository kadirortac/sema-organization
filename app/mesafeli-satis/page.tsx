export default function MesafeliSatisPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-neutral-800 font-sans py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/80">
        <h1 className="text-3xl font-light mb-6 text-neutral-800">Mesafeli Satış Sözleşmesi</h1>
        <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
          <p>İşbu sözleşme, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği'ne uygun olarak düzenlenmiştir.</p>
          <h3 className="font-semibold text-neutral-800 pt-2">1. Taraflar</h3>
          <p>Bu sözleşme, internet sitesi üzerinden sipariş veren alıcı ile Sema Organizasyon (Satıcı) arasında akdedilmiştir.</p>
          <h3 className="font-semibold text-neutral-800 pt-2">2. Konu</h3>
          <p>İşbu sözleşmenin konusu, alıcının satıcıya ait internet sitesinden elektronik ortamda siparişini yaptığı ürün/hizmetin satışı ve teslimidir.</p>
        </div>
        <div className="mt-8 pt-6 border-t border-neutral-100">
          <a href="/" className="text-sm font-medium text-[#8C7A6B] hover:underline">← Ana Sayfaya Dön</a>
        </div>
      </div>
    </main>
  );
}