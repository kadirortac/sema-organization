"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, CalendarHeart, Sparkles, X, Trash2, Phone, Mail, MapPin, HeartHandshake, Award, Clock, Sparkle } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useCart } from "@/store/useCart";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "@/lib/supabase";

const PACKAGES = [
  { id: "p1", name: "Gümüş Nişan Konsepti", price: 4500, desc: "Arka plan çemberi, pampas otları, söz masası ve nişan tepsisi dahil." },
  { id: "p2", name: "Lüks Kına Gecesi Paketi", price: 7500, desc: "Taht kiralama, kaftan, bindallı, kına tepsisi ve mumluklar dahil tam set." },
  { id: "p3", name: "Rustik Düğün Masası", price: 3500, desc: "Ahşap supla, özel mumluklar, isimlik ve masa süsleme detayları." },
];

export default function Home() {
  const { items, isOpen, addToCart, removeFromCart, toggleCart } = useCart();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true });
      
      if (data) {
        setProducts(data);
      }
      setLoading(false);
    }
    
    fetchProducts();
  }, []);

  const handleWhatsAppCheckout = () => {
    const productList = items.map((item, index) => `${index + 1}. ${item.name} - ${item.price} TL`).join("\n");
    const message = `Merhaba, sipariş vermek istiyorum:\n\n${productList}\n\n*Toplam Tutar: ${totalPrice} TL*`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/905550000000?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-neutral-800 font-sans relative flex flex-col justify-between">
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#fff',
            color: '#333',
            border: '1px solid #f5f5f5',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            padding: '16px',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: '#8C7A6B',
              secondary: '#fff',
            },
          },
        }}
      />

      <div>
        {/* Header */}
        <header className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-[#8C7A6B]">
            <Sparkles size={24} />
            <h1 className="text-2xl font-semibold tracking-tight">Sema Organizasyon</h1>
          </div>
          <nav className="flex gap-6 items-center">
             <a href="#packages" className="flex items-center gap-2 text-sm hover:text-[#8C7A6B] transition-colors">
               <CalendarHeart size={18} /> Paketler
             </a>
             <button 
               onClick={toggleCart}
               className="flex items-center gap-2 text-sm hover:text-[#8C7A6B] transition-colors relative"
             >
               <ShoppingBag size={18} /> 
               <span>Sepet</span>
               {items.length > 0 && (
                 <span className="absolute -top-2 -right-3 bg-[#8C7A6B] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                   {items.length}
                 </span>
               )}
             </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-20 pb-12 text-center px-4 bg-gradient-to-b from-[#F7F5F2] to-[#FAFAFA]">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-neutral-800">
            Unutulmaz Anlar İçin <span className="text-[#8C7A6B] font-medium">Zarif Dokunuşlar</span>
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Düğün, nişan ve kına organizasyonlarınız için her şey dahil profesyonel paketler ve özel tasarım süs eşyaları.
          </p>
        </section>

        {/* Güven & İstatistik Şeridi (Boşluğu Dolduran Alan) */}
        <section className="max-w-5xl mx-auto px-6 mb-16">
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-3 border-r border-neutral-100 last:border-none">
              <div className="w-10 h-10 rounded-full bg-[#F7F5F2] text-[#8C7A6B] flex items-center justify-center mb-2">
                <HeartHandshake size={20} />
              </div>
              <h4 className="font-semibold text-neutral-800 text-base">500+ Çift</h4>
              <p className="text-xs text-neutral-500">Mutlu Anılar</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-3 border-r border-neutral-100 last:border-none">
              <div className="w-10 h-10 rounded-full bg-[#F7F5F2] text-[#8C7A6B] flex items-center justify-center mb-2">
                <Award size={20} />
              </div>
              <h4 className="font-semibold text-neutral-800 text-base">%100 Özen</h4>
              <p className="text-xs text-neutral-500">Özel Tasarım İşçilik</p>
            </div>

            <div className="flex flex-col items-center justify-center p-3 border-r border-neutral-100 last:border-none">
              <div className="w-10 h-10 rounded-full bg-[#F7F5F2] text-[#8C7A6B] flex items-center justify-center mb-2">
                <Clock size={20} />
              </div>
              <h4 className="font-semibold text-neutral-800 text-base">Zamanında Teslim</h4>
              <p className="text-xs text-neutral-500">Kusursuz Planlama</p>
            </div>

            <div className="flex flex-col items-center justify-center p-3">
              <div className="w-10 h-10 rounded-full bg-[#F7F5F2] text-[#8C7A6B] flex items-center justify-center mb-2">
                <Sparkle size={20} />
              </div>
              <h4 className="font-semibold text-neutral-800 text-base">Esnek Konsept</h4>
              <p className="text-xs text-neutral-500">Kişiselleştirilebilir</p>
            </div>
          </div>
        </section>

        {/* Organizasyon Paketleri Bölümü */}
        <section id="packages" className="max-w-6xl mx-auto px-6 py-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold bg-[#F0EBE6] px-3 py-1 rounded-full">Özel Konsept Paketleri</span>
            <h3 className="text-3xl font-medium mt-3 text-neutral-800">Organizasyon Paketleri</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div key={pkg.id} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#8C7A6B] text-white text-xs px-3 py-1 rounded-bl-xl font-medium">Popüler</div>
                <div>
                  <h4 className="text-xl font-medium text-neutral-800 mb-2">{pkg.name}</h4>
                  <p className="text-sm text-neutral-500 mb-6 leading-relaxed">{pkg.desc}</p>
                </div>
                <div className="pt-4 border-t border-neutral-100 flex justify-between items-center">
                  <span className="font-bold text-2xl text-[#8C7A6B]">{pkg.price} TL</span>
                  <button 
                    onClick={() => {
                      addToCart(pkg);
                      toast.success(`${pkg.name} sepete eklendi!`);
                    }}
                    className="px-4 py-2 text-sm font-medium bg-neutral-800 text-white hover:bg-[#8C7A6B] rounded-lg transition-colors"
                  >
                    Paketi Seç
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Süs Eşyaları Bölümü */}
        <section className="max-w-6xl mx-auto px-6 py-12 border-t border-neutral-100 mt-12">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold bg-[#F0EBE6] px-3 py-1 rounded-full">Detaylar</span>
            <h3 className="text-3xl font-medium mt-3 text-neutral-800">Öne Çıkan Süs Eşyaları</h3>
          </div>
          
          {loading ? (
            <div className="text-center py-20 text-neutral-500">Ürünler yükleniyor...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-5 rounded-xl shadow-sm border border-neutral-100 flex flex-col group hover:shadow-md transition-shadow">
                  <div className="w-full h-56 bg-[#F0EBE6] rounded-lg mb-5 overflow-hidden flex items-center justify-center relative">
                     <span className="text-neutral-400 text-sm">Ürün Görseli</span>
                  </div>
                  <h4 className="text-lg font-medium text-neutral-800 mb-1">{product.name}</h4>
                  <p className="text-sm text-neutral-500 mb-5">{product.description}</p>
                  <div className="flex justify-between items-center w-full mt-auto">
                    <span className="font-semibold text-xl text-[#8C7A6B]">{product.price} TL</span>
                    <button 
                      onClick={() => {
                        addToCart(product);
                        toast.success(`${product.name} sepete eklendi!`);
                      }}
                      className="px-4 py-2 text-sm font-medium bg-neutral-100 text-neutral-700 hover:bg-[#8C7A6B] hover:text-white rounded-md transition-colors"
                    >
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Profesyonel Footer (Altbilgi) */}
      <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-12 mt-20 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Kolon 1: Hakkında */}
          <div>
            <div className="flex items-center gap-2 text-[#8C7A6B] mb-4">
              <Sparkles size={20} />
              <h3 className="text-lg font-semibold text-white tracking-tight">Sema Organizasyon</h3>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              En özel günlerinizde hayatınızın en güzel anlarını zarif dokunuşlar ve profesyonel konseptlerle unutulmaz kılıyoruz.
            </p>
          </div>

          {/* Kolon 2: İletişim */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">İletişim</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#8C7A6B]" /> İzmir, Türkiye
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#8C7A6B]" /> +90 (555) 000 00 00
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#8C7A6B]" /> bilgi@semaorganizasyon.com
              </li>
            </ul>
          </div>

          {/* Kolon 3: Güvenli Alışveriş & Sosyal Medya */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Güvenli Alışveriş</h4>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
              Shopier güvencesiyle 3D Secure destekli güvenli kredi kartı ödemeleri ve hızlı teslimat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#8C7A6B] text-white transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#8C7A6B] text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#25D366] text-white transition-colors">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Telif ve Yasal Uyarı */}
        <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <p>© 2026 Sema Organizasyon. Tüm hakları saklıdır.</p>
         <div className="flex gap-6">
            <a href="/gizlilik" className="hover:text-neutral-300 transition-colors">Gizlilik Politikası</a>
            <a href="/mesafeli-satis" className="hover:text-neutral-300 transition-colors">Mesafeli Satış Sözleşmesi</a>
            <a href="/iptal-iade" className="hover:text-neutral-300 transition-colors">İptal ve İade Koşulları</a>
          </div>
        </div>
      </footer>

      {/* Sepet Menüsü (Sidebar) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm transition-opacity"
            onClick={toggleCart}
          ></div>
          
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center p-6 border-b border-neutral-100">
              <h2 className="text-xl font-medium flex items-center gap-2">
                <ShoppingBag size={20} /> Sepetim ({items.length})
              </h2>
              <button onClick={toggleCart} className="text-neutral-400 hover:text-neutral-800">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center text-neutral-500 mt-20">
                  Sepetiniz şu an boş.
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center border border-neutral-100 p-4 rounded-lg bg-neutral-50">
                      <div>
                        <p className="font-medium text-neutral-800">{item.name}</p>
                        <p className="text-[#8C7A6B] font-semibold">{item.price} TL</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="text-neutral-400 hover:text-red-500 transition-colors p-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="p-6 border-t border-neutral-100 bg-neutral-50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg text-neutral-600">Toplam Tutar:</span>
                <span className="text-2xl font-bold text-[#8C7A6B]">{totalPrice} TL</span>
              </div>
              <button 
                onClick={() => setIsCheckoutOpen(true)}
                disabled={items.length === 0}
                className="w-full bg-[#8C7A6B] text-white py-4 rounded-lg font-medium hover:bg-[#7A6A5C] transition-colors disabled:bg-neutral-300 disabled:cursor-not-allowed"
              >
                Siparişi Tamamla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ödeme Yöntemi Seçim Ekranı (Modal) */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
            onClick={() => setIsCheckoutOpen(false)}
          ></div>

          <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium text-neutral-800">Ödeme Yöntemi Seçin</h3>
              <button onClick={() => setIsCheckoutOpen(false)} className="text-neutral-400 hover:text-neutral-800">
                <X size={22} />
              </button>
            </div>

            <p className="text-sm text-neutral-500 mb-6">
              Siparişinizi tamamlamak için dilediğiniz yöntemi seçebilirsiniz.
            </p>

            <div className="space-y-4">
              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full flex items-center gap-4 p-4 border border-neutral-200 rounded-xl hover:border-[#25D366] hover:bg-emerald-50/50 transition-all text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <FaWhatsapp size={26} />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800 group-hover:text-[#25D366]">WhatsApp ile Sipariş Ver</h4>
                  <p className="text-xs text-neutral-500">Havale / EFT veya kapıda ödeme seçenekleriyle hızlı sipariş.</p>
                </div>
              </button>

              <button 
                onClick={() => {
                  toast.error("Shopier mağazası aktif edildiğinde bu özellik kullanılabilir.");
                }}
                className="w-full flex items-center gap-4 p-4 border border-neutral-200 rounded-xl hover:border-[#8C7A6B] hover:bg-amber-50/30 transition-all text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 font-bold text-lg">
                  S
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800 group-hover:text-[#8C7A6B]">Kredi Kartı ile Öde (Shopier)</h4>
                  <p className="text-xs text-neutral-500">Güvenli 3D Secure ile {totalPrice} TL ödeme yap.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}