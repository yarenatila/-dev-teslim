# Bir Masal, Bin Hayal

Sekiz Türk masalını renkli ve özgün çizimlerle bir araya getiren dijital masal arşivi. Bu proje, **Programlamaya Giriş** dersi vize ödevi için hazırlanmıştır.

## Proje Bilgileri

| | |
|---|---|
| **Ad Soyad** | YAREN ATİLA |
| **Öğrenci No** | 86240044 |
| **Ders** | Programlamaya Giriş |
| **Bölüm** | Görsel İletişim Tasarımı |
| **Üniversite** | Medipol Üniversitesi |
| **GitHub Repo** | https://github.com/yarenatila/-dev-teslim |
| **Canlı Site** | https://yarenatila.github.io/-dev-teslim/ |

## Proje Hakkında

"Bir Masal, Bin Hayal", tek sayfalık bir web sitesidir. Ana sayfada sekiz masalın kartları yer alır. Bir karta tıklayınca o masalın okuma ekranı açılır. Her masalın kendine ait bir renk paleti, bir resmi, bir çerçevesi ve bir sayfa düzeni vardır; böylece her masal başka bir dünya gibi görünür.

## Özellikler

- **Arama:** Masalları adına göre arayabilirsin. Arama Türkçe harflere uyumludur (örneğin "sihirli" yazınca "Sihirli Nar" bulunur).
- **Kategori filtresi:** Tümü, Doğa, Gökyüzü, Gizem ve İyilik ve Değer düğmeleriyle masallar süzülür. Arama ve kategori birlikte çalışır.
- **Masal okuma ekranı:** Başlık, kısa tanıtım, özet, masalın tam metni ve kaynak bağlantısı bir arada görünür.
- **Yazı boyutu:** A− ve A+ düğmeleriyle masal metni 16 ile 32 piksel arasında büyütülüp küçültülebilir.
- **Masallar arası gezinme:** Önceki ve sonraki masal düğmeleri ile sekiz masalın kısa yolları vardır.
- **Her masala özel tasarım:** Renkler, motifler, resim çerçevesi ve yerleşim masaldan masala değişir.
- **Tarayıcının geri düğmesi:** Masaldan ana sayfaya dönmek için tarayıcının geri düğmesi de kullanılabilir.
- **Klavye ve ekran okuyucu desteği:** Kartlar Enter veya Boşluk tuşuyla açılır, görsellerde açıklama metni bulunur.
- **Mobil uyum:** Sayfa telefon ve tablet ekranlarına göre düzenlenir.

## Dosya Yapısı

Bu proje, vize ödevinde istendiği gibi tek bir HTML dosyasından **üç ayrı dosyaya** bölünmüştür:

```
vize-projesi/
├── index.html     → Sayfanın iskeleti (HTML)
├── style.css      → Görünümü belirleyen kurallar (CSS)
├── script.js      → Masallar dizisi ve işlevler (JavaScript)
└── README.md      → Bu dosya
```

| Dosya | Görevi |
|---|---|
| `index.html` | Sayfanın yapısını taşır: kapak, arama kutusu, kartların yeri, kaynakça ve masal okuma alanı. Masal resimleri de burada SVG olarak çizilidir. |
| `style.css` | Renkleri, yazı tiplerini, kartları, çerçeveleri ve mobil ekran düzenini belirler. |
| `script.js` | Sekiz masalın bilgilerini ve metinlerini tutar. Kartları çizer, aramayı ve kategori süzmeyi, okuma ekranını ve gezinmeyi çalıştırır. |

`index.html`, diğer iki dosyaya şu satırlarla bağlanır:

```html
<link rel="stylesheet" href="style.css">   <!-- <head> içinde -->
<script src="script.js"></script>          <!-- </body> etiketinden hemen önce -->
```

## Nasıl Çalıştırılır

1. Bu repodaki üç dosyayı (`index.html`, `style.css`, `script.js`) **aynı klasöre** indir.
2. `index.html` dosyasına çift tıkla; sayfa tarayıcıda açılır.
3. İnternet bağlantısı, ek program veya kütüphane gerekmez.

> Üç dosya aynı klasörde değilse sayfa düzensiz görünür ya da çalışmaz.

## Kullanılan Teknolojiler

- **HTML5:** Sayfanın yapısı
- **CSS3:** Tasarım, renk değişkenleri, ızgara (grid) ve esnek (flex) yerleşim, mobil uyum
- **JavaScript:** Arama, filtreleme, sayfa görünümünü değiştirme (hazır kütüphane kullanılmamıştır)
- **SVG:** Masal resimleri ve motifler (bu proje için özgün olarak çizilmiştir)

## İçerik ve Kaynaklar

- Masal resimleri bu proje için **özgün SVG çizimleri** olarak hazırlanmıştır.
- Okuma ekranındaki masal metinleri, aşağıdaki sayfalarda yer alan hikâyelerin olay örgüsü temel alınarak **özgün biçimde yeniden anlatılmıştır**. Kaynak metinlerin birebir kopyası değildir.

Kaynakça (erişim tarihi: 28 Ekim 2026):

1. Yürek Ana. Masal Oku. <https://www.masaloku.net/yurek-ana/>
2. Gökten Düşen Üç Elma. Masal Oku. <https://www.masaloku.net/gokten-dusen-uc-elma/>
3. Kırmızı Uçurtma Masalı. Masal Oku. <https://www.masaloku.net/kirmizi-ucurtma/>
4. Ayşecik ile Yasemin Sultan. Masal Oku. <https://www.masaloku.net/aysecik-ile-yasemin-sultan/>
5. Dipsiz Kuyu. Masal Oku. <https://www.masaloku.net/dipsiz-kuyu-masali/>
6. Sihirli Nar. Masal Oku. <https://www.masaloku.net/sihirli-nar/>
7. Vadideki Nine. Masal Oku. <https://www.masaloku.net/vadideki-nine/>
8. Kıymetli Tuz. Masal Oku. <https://www.masaloku.net/kiymetli-tuz/>
