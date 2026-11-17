/*
  SCRIPT.JS — BİR MASAL, BİN HAYAL
  Bu dosya, index.html içindeki bütün JavaScript kodunu taşır.
  index.html bu dosyaya, </body> etiketinden hemen önce şu satırla bağlanır:
      <script src="script.js"></script>
  Bölümler:
  1. Veriler: kategoriler ve masallar dizisi
  2. Küçük JavaScript işlevleri (kartları çizme, masalı gösterme, gezinme)
  3. Olay dinleyicileri ve sayfanın ilk açılışı
  Dosyanın en sonunda: görsel ve metin değiştirme kılavuzu
*/
'use strict';

/* ========== 1. VERİLER ========== */
// Bütün kategori adları tek yerde tutulur. Düğmeler bunlardan üretilir.
const kategoriler = { hepsi: 'Tümü', doga: 'Doğa', gokyuzu: 'Gökyüzü', gizem: 'Gizem', iyilik: 'İyilik ve Değer' };
const erisimTarihi = '28 Ekim 2026';

/* MASALLAR DİZİSİNİ NASIL DÜZENLERSİN?
   id: Adres çubuğundaki kısa kimlik. | ad: Masalın başlığı.
   kisaTanitim: Kartta ve okuma başlığında kısa açıklama. | ozet: Düzenlenebilir özet.
   metin: Bu masalın özgün yeniden anlatımı; backtick içindeki metni istersen değiştirebilirsin. Paragraflar boş satırlarla ayrılır.
   metinTuru: Okuma bölümünde görünen açıklama, örn. "Özgün yeniden anlatım".
   kaynak: Masalın URL'si. | yazarNotu: Kaynakta geçen ad veya yöre notu.
   kategoriler: Filtre grupları. | imageData: BU ALANI SEN DEĞİŞTİR; PNG/JPEG data URI.
   resimKimligi: imageData boşsa gösterilecek özgün SVG'nin id'si.
   resimAlt: Ekran okuyucuya görsel tarifi.
   yerlesim: sol / sag / ust / ortada. | cerceve: Sekiz çerçeveden biri.
   desen: Sayfanın silik motifinin adı.
   renkler: zemin, yuzey, metin, baslik, soluk, vurgu, panelVurgu,
            dugme, dugmeYazi, kenar ve kart: her masalın renk paleti.
   Her alanın değeri ilgili masal nesnesinin içinde değiştirilebilir.
*/
const masallar = [
  { // 1 — YÜREK ANA
    id: 'yurek-ana', ad: 'Yürek Ana',
    kisaTanitim: 'On iki oğlunu türküsüyle zindandan kurtaran bir ananın masalı.',
    ozet: 'Yiğit Ana\'nın on iki oğlu, kalenin zalim hükümdarı tarafından zindana atılır. Ananın kale duvarının dibinde söylediği türkü zindana ulaşır ve çocuklar kurtulur. Ana, oğullarına birer ay adı verir ve uzaklara dağılmalarını ister.',
    metin: `Bir zamanlar, sevgisini söze sığdıramayan bir ana yaşarmış. Ona Yiğit Ana derlermiş. Bütün varlığı, on iki oğlunun iyiliğiymiş. Her birinin başka huyu, başka sesi, başka düşü varmış; ama analarının çağrısını duyduklarında hepsi aynı sevgiyle dönüp bakarmış. Yiğit Ana, onların iyi insanlar olarak büyümesini, birbirlerine ve yaşadıkları toprağa saygı duymasını istermiş.

Ne var ki bu ailenin üzerine ağır bir gölge düşmüş. Ülkenin zalim hükümdarı on iki kardeşi bir kalenin zindanına kapattırmış. Taş duvarların ardında günler birbirine karışırken kardeşler dışarıdaki dünyayı, en çok da analarının sesini özlemiş. Yiğit Ana'nın yüreğineyse çocuklarının yokluğu koca bir boşluk gibi yerleşmiş. Yine de umudunu bırakmamış.

Ana, kalenin önüne gitmiş. Demir kapılardan içeri girmesine izin verilmemiş, yüksek duvarlar önüne dikilmiş. O da elinden gelen tek şeye sarılmış: sesine. Kalenin dibinde durmuş, özlemini ve sevgisini bir türküye dökmüş. Türküsü taşlara çarpıp yankılanmış; duvarların öte yanında bekleyen oğullarına kadar ulaşmış. Ana sesinin bulunduğu yere umut da varmış. Çok geçmeden kardeşler zindandan kurtulmuş.

Birbirlerini gördüklerinde sevinçleri sözlere sığmamış. Yiğit Ana bütün oğullarını sırayla kucaklamış. Fakat zalim hükümdarın ülkesinde kalmalarının yeniden tehlike getireceğini biliyormuş. Onlara uzak diyarlara gitmelerini, ayrı yollardan kendi hayatlarını kurmalarını söylemiş. Kardeşler analarından ayrılmayı istemeseler de onun sözlerinin sevgiden doğduğunu anlamış.

Yola çıkmadan önce analarına bir soruları varmış: Farklı yerlere dağıldıklarında nasıl anılacaklarmış? Yiğit Ana biraz düşünmüş. Sonra onları yan yana dizmiş ve her birine bir ayın adını vermiş: Ocak, Şubat, Mart, Nisan, Mayıs, Haziran, Temmuz, Ağustos, Eylül, Ekim, Kasım ve Aralık. Böylece on iki kardeş, yılın on iki ayı gibi kendi sıralarına ve kendi yerlerine kavuşmuş.

Kardeşler başka başka yönlere yürümüş. Yiğit Ana onların ardına bakarken üzgün olsa da sevginin uzaklıkla bitmediğini biliyormuş. Aylar nasıl birbirini izleyerek yılı tamamlıyorsa, kardeşlerin yolları da aynı ananın sevgisinde birleşiyormuş. O günden beri zaman dönüp dolaştıkça Yiğit Ana'nın türküsü de sevginin, özlemin ve umudun masalı olarak anlatılmış.`,
    metinTuru: 'Özgün yeniden anlatım', // Kaynaktaki olaylar esas alınarak yeniden yazılmıştır; birebir kaynak metin değildir. // Yürek Ana'nın tam metni
    kaynak: 'https://www.masaloku.net/yurek-ana/', yazarNotu: 'Kaynak sayfada masal yazarı olarak Taki Akkuş belirtilmiştir.',
    kategoriler: ['iyilik', 'doga'], imageData: '', // BU ALANI SEN DEĞİŞTİR: Yürek Ana PNG/JPEG
    resimKimligi: 'resim-yurek-ana',
    resimAlt: 'Başında eşarp olan yüzsüz, stilize bir ana figürü göğsünde kalp tutuyor; iki yanında kalp biçimli yapraklı sarmaşıklar var.',
    yerlesim: 'sol', cerceve: 'oval', desen: 'kalp',
    renkler: { zemin:'#F6E1DC', yuzey:'#FFF9F5', metin:'#3F2524', baslik:'#7A2B3B', soluk:'#664641', vurgu:'#D4768A', panelVurgu:'#8E3548', dugme:'#8E3548', dugmeYazi:'#FFFFFF', kenar:'#E6B9B8', kart:'#A63D56' }
  },
  { // 2 — GÖKTEN DÜŞEN ÜÇ ELMA
    id: 'gokten-dusen-uc-elma', ad: 'Gökten Düşen Üç Elma',
    kisaTanitim: 'Çocuğu olmayan bir padişahın ve hanımının elma ağacıyla başlayan masalı.',
    ozet: 'Çocuğu olmayan bir padişah bahçe yaptırır; umduğunu bulamayınca öfkelenir. Hanımı yaşlı bir elma ağacının sözünü dinler, yedi yıl sonra verdiği elmayı padişahla paylaşır ve bir oğulları olur. Kutlamalar sırasında gökten üç elma düşer.',
    metin: `Uzak bir ülkenin padişahının her türlü zenginliği varmış. Sarayının odaları geniş, hazineleri dolu, sofrası bereketliymiş. Yine de en çok istediği şeye sahip değilmiş: bir çocuğa. Yıllar geçtikçe bu isteği büyüyor, sarayın kalabalığı bile ona sessiz görünüyormuş. Padişahın hanımı da onunla aynı özlemi taşıyormuş.

Bir gün padişaha, güzel bir bahçe yaptırmasının iyi geleceği söylenmiş. Bunun üzerine sarayın yanında çiçeklerle, ağaçlarla ve su sesleriyle dolu büyük bir bahçe kurulmuş. Her yanda renkler ve kokular varmış; ancak beklenen haber gelmemiş. Padişah, bahçeye baktıkça sabırsızlığını hatırlar olmuş. Sonunda öfkesine yenilip güzelim bahçeyi dağıtmaya kalkışmış. Hanımı onu durdurmaya çalışmış; çünkü bahçeyi yalnızca bir dileğin karşılığı olarak değil, canlı bir yer olarak seviyormuş.

Padişahın hanımı sık sık ağaçların arasında yürür, yaprakların hışırtısına kulak verirmiş. Bahçenin yaşlı elma ağacı onun sabrını görmüş. Masal bu ya, bir gün ağaç dile gelmiş ve kadına kendi filizlerinden birini dikmesini öğütlemiş. Filiz büyüyüp meyve verdiğinde elmayı padişahla paylaşmasını istemiş. Kadın bu sözlere inanmış; filizi alıp toprağa yerleştirmiş.

Mevsimler geçmiş. Küçük filiz önce fidan, sonra güçlü bir ağaç olmuş. Kadın onu yıllarca koruyup gözetmiş. Yedinci yıl geldiğinde ağacın dalında tek bir elma belirivermiş. Elmanın bir yanı kızıl, öteki yanı açık renkliymiş. Kadın elmayı özenle koparıp ikiye bölmüş; yarısını kendisi yemiş, diğer yarısını padişaha vermiş.

Aradan zaman geçince sarayda uzun zamandır beklenen müjde duyulmuş: padişahla hanımının bir oğlu dünyaya gelmiş. O güne dek üzüntüyle dolan avlular bu kez sevinçle canlanmış. İnsanlar birlikte gülmüş, kutlamalar başlamış. Bahçedeki ağaçlar bile sanki bu mutluluğa yapraklarıyla eşlik ediyormuş.

Derken masalın sonuna yakışan o şaşırtıcı olay gerçekleşmiş: gökten üç elma düşmüş. Biri umutla bekleyenlere, biri sabrı unutmayanlara, biri de bu masalı dinleyenlere armağan olsun denmiş. Böylece yaşlı bir ağacın sözüne kulak veren kadının ve sonunda özlemlerine kavuşan ailenin hikâyesi, üç elmanın hatırasıyla yaşamaya devam etmiş.`,
    metinTuru: 'Özgün yeniden anlatım', // Kaynaktaki olaylar esas alınarak yeniden yazılmıştır; birebir kaynak metin değildir. // Gökten Düşen Üç Elma'nın tam metni
    kaynak: 'https://www.masaloku.net/gokten-dusen-uc-elma/', yazarNotu: '',
    kategoriler: ['gokyuzu', 'gizem'], imageData: '', // BU ALANI SEN DEĞİŞTİR: Üç Elma PNG/JPEG
    resimKimligi: 'resim-gokten-dusen-uc-elma',
    resimAlt: 'Yıldızlı mor-lacivert gecede süzülen üç kırmızı elma; yanında bir hilal ve ince altın çizgiler.',
    yerlesim: 'ust', cerceve: 'genis', desen: 'yildiz',
    renkler: { zemin:'#11173F', yuzey:'#1B1F58', metin:'#F3EEDC', baslik:'#F4D58D', soluk:'#C9CCE6', vurgu:'#E3B94F', panelVurgu:'#F4D58D', dugme:'#E3B94F', dugmeYazi:'#1A1F4D', kenar:'#4A4F9A', kart:'#2E2C86' }
  },
  { // 3 — KIRMIZI UÇURTMA MASALI
    id: 'kirmizi-ucurtma', ad: 'Kırmızı Uçurtma Masalı',
    kisaTanitim: 'Alper\'in en iyi arkadaşı Sevim için yaptığı kırmızı uçurtmanın masalı.',
    ozet: 'Hayalperest ve çalışkan Alper, en iyi arkadaşı Sevim\'in doğum günü için babasının yardımıyla kırmızı bir uçurtma yapar. Sevim hediyeyi çok sever; ikisi uçurtmayı çayırda birlikte uçurur ve uçurtma dostluklarının simgesi olur.',
    metin: `Bir kasabada Alper adında, aklı sık sık gökyüzüne kayan bir çocuk yaşarmış. Uçurtmaları çok severmiş. Bir uçurtmanın yükselişini izlerken rüzgârın görünmeyen yollarını düşünür, renkli kâğıdın nasıl olup da göğe ulaşabildiğine şaşarmış. Onun en yakın arkadaşı ise neşeli ve yardımsever Sevim'miş. İkisi birlikte oyunlar oynar, gördüklerini birbirlerine anlatırmış.

Sevim'in doğum günü yaklaşınca Alper ona sıradan bir hediye vermek istememiş. Sevim'i tanıdıkça, ona kendi elleriyle hazırladığı bir şeyin daha anlamlı olacağını düşünmüş. Gökyüzünde gördüğü uçurtmalar aklına gelmiş ve kararını vermiş: En iyi arkadaşı için kırmızı bir uçurtma yapacakmış.

Alper işe hevesle başlamış ama bir uçurtmayı uçurmanın, onu uzaktan izlemek kadar kolay olmadığını anlamış. Çıtaların dengeli durması, kâğıdın düzgün gerilmesi ve ipin sağlam bağlanması gerekiyormuş. Babasından yardım istemiş. Babası da onunla birlikte çalışmış; böylece Alper, iyi bir sonuç için sabrın ve özenin gerekli olduğunu görmüş.

Sonunda kırmızı kâğıdı ışıkta parlayan bir uçurtma ortaya çıkmış. Uzun kuyruğu hafifçe sallanıyor, ince ipi onu sahibine bağlıyormuş. Alper yaptıkları işe bakıp sevinmiş. Bu yalnızca bir oyuncak değilmiş artık; zamanını, emeğini ve Sevim'e duyduğu sevgiyi içinde taşıyan bir armağanmış.

Doğum günü geldiğinde Alper hediyesini Sevim'e vermiş. Sevim paketi açınca şaşırmış, sonra yüzü kocaman bir gülümsemeyle aydınlanmış. Arkadaşının kendi elleriyle hazırladığı uçurtmaya bakarken ne kadar düşünüldüğünü anlamış. Alper de onun sevincini görünce emeklerinin karşılığını aldığını hissetmiş.

Birlikte geniş bir çayıra çıkmışlar. Rüzgârın yönünü kollamış, ipi dikkatle tutmuşlar. Kırmızı uçurtma önce biraz sallanmış, ardından yükselmiş; kuyruğu gökyüzünün mavisi üzerinde dans eder gibi uzanmış. İki arkadaş uçurtmayı izlerken bir hediyenin değerini fiyatın değil, ardındaki düşüncenin belirlediğini hissetmiş.

O günden sonra kırmızı uçurtma onların dostluğunu hatırlatan bir işaret olmuş. Ne zaman gökte süzüldüğünü görseler, birlikte verdikleri emeği ve paylaştıkları mutluluğu anımsarlarmış. Çünkü bazı armağanlar göğe yükselse de insanın kalbinde yer etmeyi sürdürürmüş.`,
    metinTuru: 'Özgün yeniden anlatım', // Kaynaktaki olaylar esas alınarak yeniden yazılmıştır; birebir kaynak metin değildir. // Kırmızı Uçurtma Masalı'nın tam metni
    kaynak: 'https://www.masaloku.net/kirmizi-ucurtma/', yazarNotu: '',
    kategoriler: ['gokyuzu'], imageData: '', // BU ALANI SEN DEĞİŞTİR: Kırmızı Uçurtma PNG/JPEG
    resimKimligi: 'resim-kirmizi-ucurtma',
    resimAlt: 'Mavi gökyüzünde bulutların arasında uçan kırmızı bir uçurtma ve fiyonklu uzun kuyruğu.',
    yerlesim: 'sag', cerceve: 'kose', desen: 'dalga',
    renkler: { zemin:'#D6EDFA', yuzey:'#FFFFFF', metin:'#1B2F45', baslik:'#B3202A', soluk:'#3C566F', vurgu:'#E2323E', panelVurgu:'#B3202A', dugme:'#C4202C', dugmeYazi:'#FFFFFF', kenar:'#A9D5EE', kart:'#C4202C' }
  },
  { // 4 — AYŞECİK İLE YASEMİN SULTAN
    id: 'aysecik-ile-yasemin-sultan', ad: 'Ayşecik ile Yasemin Sultan',
    kisaTanitim: 'Bir sütçünün kızı ile bir sultanın saraydaki arkadaşlığının masalı.',
    ozet: 'Sütçü babasıyla sarayı gezmeye giden Ayşecik, orada Yasemin Sultan\'la tanışıp arkadaş olur. Padişah bu arkadaşlığa karşı çıkar; Yasemin Sultan hastalanınca Ayşecik saraya çağrılır ve padişah onu ikinci kızı olarak kabul eder.',
    metin: `Sarayın yakınındaki bir kasabada Ayşecik adında bir kız yaşarmış. Babası sütçüymüş; her gün saraya taze süt götürürmüş. Ayşecik uzaktan gördüğü o büyük yapıyı çok merak edermiş. Yüksek duvarların ardında nasıl bir yaşam olduğunu, geniş avluların ve süslü salonların nasıl göründüğünü düşünürmüş. Bir gün babasından kendisini de götürmesini istemiş.

Babası onun isteğini kabul edince Ayşecik büyük bir sevinçle yola çıkmış. Saraya vardığında gördükleri hayal ettiğinden de farklıymış. İşini yapan görevliler, uzun koridorlar, gösterişli odalar ona bambaşka bir dünyanın kapısını aralamış. O sırada sarayda yaşayan Yasemin Sultan'la karşılaşmış. İlk başta çekinse de Yasemin Sultan'ın sıcak davranışı sayesinde rahatlamış.

İki kız konuşmaya başladıklarında birbirlerinin dünyalarını tanımış. Birinin evi çiftliğin yanında, diğerinin evi sarayın içindeymiş; ama sevinçleri, merakları ve dost edinme istekleri birbirine benziyormuş. Ayşecik kendi evinden ve ailesinden söz etmiş. Yasemin Sultan da onu dikkatle dinlemiş. Birbirlerini yeniden görmek istemişler.

Fakat bu arkadaşlık padişahın hoşuna gitmemiş. Ona göre bir sultan, sütçünün kızıyla yakınlık kurmamalıymış. Yasemin Sultan bu düşünceye karşı çıkmış; bir insanın değerinin doğduğu yere ya da giydiği kıyafete bağlı olmadığını anlatmaya çalışmış. Ne var ki padişah kararından dönmemiş ve iki arkadaşın görüşmesini yasaklamış.

Ayrılık Yasemin Sultan'ı çok üzmüş. Gün geçtikçe neşesi sönmüş, sonunda hastalanmış. Saraydakiler onu iyileştirmek için çare aramış ama Yasemin Sultan en çok arkadaşını özlüyormuş. Kızının durumunu gören padişah, Ayşecik'i saraya çağırtmış.

Ayşecik geldiğinde Yasemin Sultan'ın yüzü aydınlanmış. Uzun zamandır eksikliğini duyduğu dostluk yeniden yanında olmuş. Bu buluşma ona iyi gelmiş; zamanla sağlığına ve eski neşesine kavuşmuş. Padişah da iki kızın birbirine verdiği değeri gördükçe ön yargısını sorgulamış.

Sonunda padişah, Ayşecik'i kendi kızı gibi kabul ettiğini söylemiş. Böylece sarayın kapıları yalnızca bir misafire değil, gerçek bir dostluğa açılmış. Ayşecik ile Yasemin Sultan'ın hikâyesi, insanların birbirini unvanlara göre değil, yüreklerine göre tanıması gerektiğini hatırlatan bir masal olarak anlatılmış.`,
    metinTuru: 'Özgün yeniden anlatım', // Kaynaktaki olaylar esas alınarak yeniden yazılmıştır; birebir kaynak metin değildir. // Ayşecik ile Yasemin Sultan'ın tam metni
    kaynak: 'https://www.masaloku.net/aysecik-ile-yasemin-sultan/',
    yazarNotu: 'Kaynak sayfada metnin sonunda adı geçen kişi: Serdar Yıldırım (yazar mı derleyen mi belirtilmemiş)',
    kategoriler: ['doga'], imageData: '', // BU ALANI SEN DEĞİŞTİR: Ayşecik PNG/JPEG
    resimKimligi: 'resim-aysecik-ile-yasemin-sultan',
    resimAlt: 'Altın kenarlı sivri bir saray kemeri; iki yanında beyaz yasemin çiçekleriyle dolanmış sarmaşıklar.',
    yerlesim: 'ortada', cerceve: 'kemer', desen: 'cicek',
    renkler: { zemin:'#E6DCF2', yuzey:'#FCF8FD', metin:'#382849', baslik:'#5B3A7E', soluk:'#5A4A6C', vurgu:'#C9A24B', panelVurgu:'#5B3A7E', dugme:'#6C4A93', dugmeYazi:'#FFFFFF', kenar:'#CDB9E4', kart:'#7A56A6' }
  },
  { // 5 — DİPSİZ KUYU
    id: 'dipsiz-kuyu', ad: 'Dipsiz Kuyu',
    kisaTanitim: 'Bir kuyunun dibinde başlayıp yer altı ülkesine uzanan bir macera.',
    ozet: 'Padişahın iki oğlundan büyüğü, küçük kardeşini dipsiz bir kuyuya iter. Küçük kardeş yer altı ülkesinde bir nineye konuk olur, bir devle karşılaşır ve Zümrüdü Anka kuşunun yardımıyla yeryüzüne döner.',
    metin: `Bir ülkede yaşlanan bir padişahın iki oğlu varmış. İki kardeş birbirleriyle geçinemez, özellikle taht konusu açılınca aralarındaki anlaşmazlık büyürmüş. Padişah hastalanınca oğullarından derdine çare bulmalarını istemiş. Bunun üzerine kardeşler yola çıkmış. Uzun yolculuklarının bir yerinde derinliği görünmeyen bir kuyunun yanında dinlenmişler.

Kardeşler arasında yine anlaşmazlık çıkmış. Büyük kardeş, taht hırsına yenilerek küçüğünü kuyuya itmiş ve onu karanlığın içinde bırakmış. Küçük kardeşin çevresinde gördüğü tek şey, yukarıda giderek küçülen bir ışıkmış. Kendine geldiğinde bu kuyunun sıradan bir kuyu olmadığını fark etmiş. Orada karşılaştığı ihtiyar ona yardım edebilecek sihirli bir yol göstermiş.

İhtiyarın verdiği imkânla iki at belirmiş: biri açık, diğeri koyu renkliymiş. Açık renkli olan yeryüzüne, öteki ise daha da derinlere gidiyormuş. Delikanlı bir karışıklık sonucu yanlış ata binmiş ve kendini yer altındaki başka bir ülkede bulmuş. Orada her şey yabancıymış; ama eve dönebilme düşüncesi onu ayakta tutuyormuş.

Bir süre sonra bir ninenin kapısını çalmış. Nine onu konuk etmiş. Konuştukça yer altı ülkesinin büyük bir korkuyla yaşadığını öğrenmiş. Bir dev, insanların suyuna engel oluyormuş. Ülkenin sakinleri yaşamlarını sürdürebilmek için bu güç karşısında çaresiz kalmış. Delikanlı, yalnız kendi kurtuluşunu düşünmek yerine başkalarının sıkıntısına da kayıtsız kalmamış.

Devle yüzleşmek kolay değilmiş. Yine de korkusunu yenip karşısına çıkmış ve halkın suyunu yeniden kullanabilmesini sağlamış. Yer altı ülkesinde duyulan sevinç, delikanlının yüreğine de cesaret vermiş. Ancak asıl istediği şey, bir gün güneş ışığını yeniden görebilmekmiş.

Yolculuğunun devamında Zümrüdü Anka'yla karşılaşmış. Bu olağanüstü kuşun yardımına ihtiyacı varmış. Delikanlının gösterdiği iyilik ve cesaret, Anka'nın ona güvenmesini sağlamış. Kuş, onu yeniden yeryüzüne çıkarabilecek güce sahipmiş. Böylece kuyunun karanlığında başlayan yolculuk, gökyüzüne doğru açılan bir umuda dönüşmüş.

Delikanlı sonunda yeryüzüne kavuşmuş. Artık kendisi için asıl değerin yalnızca bir tahta sahip olmak olmadığını biliyormuş. Karanlıkta tek başına kaldığında bile başkalarına yardım etmeyi seçmiş, cesareti ve iyiliği sayesinde yolunu bulmuş. Dipsiz Kuyu'nun masalı da, en derin karanlıkların içinden bile çıkış bulunabileceğini anlatır olmuş.`,
    metinTuru: 'Özgün yeniden anlatım', // Kaynaktaki olaylar esas alınarak yeniden yazılmıştır; birebir kaynak metin değildir. // Dipsiz Kuyu'nun tam metni
    kaynak: 'https://www.masaloku.net/dipsiz-kuyu-masali/',
    yazarNotu: 'Kaynak sayfada masalın Afyon Karahisar yöresine ait olduğu belirtiliyor',
    kategoriler: ['gizem'], imageData: '', // BU ALANI SEN DEĞİŞTİR: Dipsiz Kuyu PNG/JPEG
    resimKimligi: 'resim-dipsiz-kuyu',
    resimAlt: 'Gece gökyüzünde dolunay; ay ışığı, taş örgülü bir kuyunun halka halka derinleşen ağzına iniyor.',
    yerlesim: 'ortada', cerceve: 'daire', desen: 'halka',
    renkler: { zemin:'#12183D', yuzey:'#222B5E', metin:'#ECEFF8', baslik:'#D3DAF0', soluk:'#B8C2E0', vurgu:'#9AA8D6', panelVurgu:'#D3DAF0', dugme:'#CBD4EC', dugmeYazi:'#141B3D', kenar:'#4A5590', kart:'#3A4278' }
  },
  { // 6 — SİHİRLİ NAR
    id: 'sihirli-nar', ad: 'Sihirli Nar',
    kisaTanitim: 'Üç şehzadenin sihirli buluşlarının ve şifalı bir narın masalı.',
    ozet: 'Padişah üç oğlunu farklı ülkelere gönderir. Mehmet sihirli bir halı, Selim sihirli bir ayna edinir; Murat\'ın şifalı narı ise hasta Gülnaz Sultan\'ı iyileştirir. Gülnaz Sultan, Murat\'ın gönül zenginliğini görüp onunla evlenmeyi seçer.',
    metin: `Bir padişahın Mehmet, Selim ve Murat adında üç oğlu varmış. Padişah, oğullarının dünyayı tanımasını ve birbirinden farklı yerlerde öğrendiklerini görmeyi istemiş. Bu yüzden üçünü ayrı ülkelere göndermiş. Üç şehzade yola çıkarken ne bulacaklarını, hangi insanlarla karşılaşacaklarını bilmiyormuş; her biri kendi yolunu izlemiş.

Mehmet'in yolculuğu ona olağanüstü bir halı kazandırmış. Bu halı sıradan bir dokuma değil, sihirli bir eşya imiş. Selim'in elineyse başka bir büyülü nesne geçmiş: uzaklarda olup bitenleri gösterebilen bir ayna. İki kardeş de sahip oldukları şeylerin değerini anlamaya çalışmış. Murat ise şifalı bir nar bulmuş; narın görünüşü sade olsa da etkisi çok büyükmüş.

Üç kardeş yeniden bir araya geldiklerinde edindikleri nesneleri birbirlerine göstermiş. Halı, ayna ve nar birbirine hiç benzemiyormuş. Bu farklılık, hangisinin daha değerli olduğu sorusunu da ortaya çıkarmış. Bir eşyayı yalnızca parlaklığına, gücüne ya da seyrek bulunmasına bakarak değerlendirmek yeterli miymiş?

O sırada Gülnaz Sultan'ın hastalığı önemli bir sorun hâline gelmiş. Ona yardım edilmesi gerekiyormuş. Kardeşlerin bulduğu büyülü nesneler bu kez yalnızca hayranlık uyandıran şeyler olmaktan çıkıp bir amaca hizmet etmiş. Murat'ın yanında taşıdığı narın şifalı olduğu anlaşılmış. Nar sayesinde Gülnaz Sultan iyileşmiş.

İyileşmenin ardından Gülnaz Sultan, üç şehzadeyi de düşünmüş. Elbette hepsinin yolculuğu farklı bir emek ve cesaret gerektirmiş. Fakat o, Murat'ın davranışında başka bir değer görmüş. Murat elindeki nimeti yalnız kendisi için saklamamış, bir insanın iyileşmesine yardımcı olmuş. Gülnaz Sultan'ın dikkatini çeken, nar kadar Murat'ın gönül zenginliğiymiş.

Sonunda Gülnaz Sultan evlenmek için Murat'ı seçmiş. Böylece üç kardeşin büyülü eşyaları arasında yapılan karşılaştırma, bambaşka bir anlama kavuşmuş: En değerli şey her zaman en gösterişli olan değil, ihtiyaç duyulduğu anda iyiliğe dönüşebileniymiş. Sihirli narın masalı da bu düşünceyle dilden dile anlatılmış.`,
    metinTuru: 'Özgün yeniden anlatım', // Kaynaktaki olaylar esas alınarak yeniden yazılmıştır; birebir kaynak metin değildir. // Sihirli Nar'ın tam metni
    kaynak: 'https://www.masaloku.net/sihirli-nar/', yazarNotu: '',
    kategoriler: ['doga', 'gizem'], imageData: '', // BU ALANI SEN DEĞİŞTİR: Sihirli Nar PNG/JPEG
    resimKimligi: 'resim-sihirli-nar',
    resimAlt: 'Bordo zeminde sekiz köşeli yıldız ve yapraklarla çevrili büyük bir nar; narın bir dilimi açık, kırmızı taneleri görünüyor.',
    yerlesim: 'sag', cerceve: 'sekizgen', desen: 'nar',
    renkler: { zemin:'#561327', yuzey:'#FBF0DB', metin:'#3A1A20', baslik:'#F6D58A', soluk:'#F0D7BE', vurgu:'#D6A93E', panelVurgu:'#8A1F3B', dugme:'#2F6B3A', dugmeYazi:'#FFFFFF', kenar:'#E6C98A', kart:'#8A1F3B' }
  },
  { // 7 — VADİDEKİ NİNE
    id: 'vadideki-nine', ad: 'Vadideki Nine',
    kisaTanitim: 'Bir delikanlının annesini vadiye bırakmasıyla başlayan masal.',
    ozet: 'Gelinin isteği üzerine annesini bir vadiye bırakmak zorunda kalan delikanlı, ertesi gün onu ceylanların çevresinde bulur. Gelin de aynı yolu kendi annesiyle denemek ister.',
    metin: `Dağlara yakın küçük bir köyde bir delikanlı annesiyle yaşarmış. Yıllar boyunca aynı evin sevinçlerini ve güçlüklerini paylaşmışlar. Delikanlı büyüdükçe annesi yaşlanmış; eskiden kolaylıkla yaptığı işler artık ona ağır gelmeye başlamış. Oğlu annesinin yorulmamasını istermiş. Evlerinde eksik olanı birlikte tamamlamaya çalışırlarmış.

Bir süre sonra delikanlı evlenmiş. İlk günlerde herkesin huzurlu olmasını ummuş. Fakat zaman geçtikçe gelin, yaşlı ninenin evde bulunmasını istememeye başlamış. Ninenin çalışamamasını ve yardıma ihtiyaç duymasını bir yük gibi görüyormuş. Delikanlı ise annesinin kendisine yıllarca emek verdiğini biliyor, onun bu evden gönderilmesine razı olmak istemiyormuş.

Gelin ısrar ettikçe evdeki huzur azalmış. Delikanlı sonunda istemediği bir karar vermiş: Annesini uzak bir vadiye götürüp orada bırakacakmış. Yaşlı nine oğlunun içindeki kederi anlamış. Birlikte yola çıkmışlar. Yol uzadıkça delikanlının adımları ağırlaşmış. Vadide vedalaştıklarında annesi ona kızgınlık göstermek yerine iyilik dilemiş. Bu da oğlunun üzüntüsünü daha da derinleştirmiş.

Delikanlı eve dönmüş ama ne yapsa rahatlayamamış. Annesini nasıl bir yerde bıraktığını, yalnız başına ne yaptığını düşünmekten uyuyamaz olmuş. Sonunda yeniden vadiye gitmiş. Oraya yaklaştığında korktuğu manzarayla değil, beklemediği bir görüntüyle karşılaşmış: Ninenin çevresinde ceylanlar dolaşıyormuş. Vadi, ona bıraktığı zamankinden çok daha sakin ve huzurlu görünmüş.

Delikanlı annesini sağ salim görünce sevinçle yanına varmış. Ninenin çevresinde toplanan ceylanlar, onun yalnız bırakılmış olsa bile doğayla bir yakınlık kurabildiğini gösteriyormuş. Oğlu bu manzarayı görünce annesinin kıymetini yeniden hatırlamış. Yaşlılık, bir insanın sevgisini ya da değerini eksiltmiyormuş.

Bu olayın ardından gelin de kendi annesini aynı vadiye bırakmayı istemiş. Onun isteği, delikanlının yaşadıklarının ne anlama geldiğini gerçekten anlayıp anlamadığını sorgulatan bir dönüm noktası olmuş. Çünkü görünen aynı vadi olsa bile insanlar oraya aynı niyetle gitmiyormuş. Birini bırakmanın ardında sevgi, utanç, çıkar ya da bencillik bulunabilirmiş.

Vadideki Nine'nin anlatısı, yaşlı bir insanın yalnızca gücü azaldığı için değersiz sayılamayacağını düşündürürmüş. Delikanlının pişmanlığı, ninenin sakinliği ve ceylanların etrafındaki huzuru, masalı dinleyenlerin aklında uzun süre kalırmış. Ananın yeri, ona gösterilen saygıyla ölçülürmüş.`,
    metinTuru: 'Özgün yeniden anlatım', // Kaynaktaki olaylar esas alınarak yeniden yazılmıştır; birebir kaynak metin değildir. // Vadideki Nine'nin tam metni
    kaynak: 'https://www.masaloku.net/vadideki-nine/',
    yazarNotu: 'Kaynak sayfada metnin sonunda adı geçen kişi: Nazife Çiftçioğlu',
    kategoriler: ['doga'], imageData: '', // BU ALANI SEN DEĞİŞTİR: Vadideki Nine PNG/JPEG
    resimKimligi: 'resim-vadideki-nine',
    resimAlt: 'Katmanlı yeşil tepeler, küçük bir ev, ağaçlar ve tepelerin arasından kıvrılan bir patika.',
    yerlesim: 'ust', cerceve: 'kitap', desen: 'yaprak',
    renkler: { zemin:'#E2E8D0', yuzey:'#FCF8EC', metin:'#382F22', baslik:'#46623E', soluk:'#564E3C', vurgu:'#E2BC57', panelVurgu:'#4F6B47', dugme:'#566F4B', dugmeYazi:'#FFFFFF', kenar:'#C5D0AC', kart:'#5E7B52' }
  },
  { // 8 — KIYMETLİ TUZ
    id: 'kiymetli-tuz', ad: 'Kıymetli Tuz',
    kisaTanitim: 'Bir padişahın küçük kızının ve tuzun değerinin masalı.',
    ozet: 'Padişahın küçük kızı, babasının öfkesine uğrar ve saraydan uzaklaşır. Yıllar sonra babasını tuzsuz hazırlanmış bir ziyafete çağırır ve ona tuzun değerini gösterir; baba da kızıyla barışır.',
    metin: `Bir zamanlar üç kızı olan bir padişah yaşarmış. Sarayında saygı görmekten hoşlanır, kızlarının da kendisini ne kadar sevdiğini duymak istermiş. Bir gün onları yanına çağırmış ve her birine sevgisini nasıl anlatacağını sormuş. Büyük kız çok büyük sözler söylemiş, ortanca kız da sevgisini ölçmek için geniş benzetmeler bulmuş. En küçük kız ise babasını tuz kadar sevdiğini söylemiş.

Padişah bu cevabı duyunca öfkelenmiş. Tuz ona sıradan ve değersiz görünüyormuş. Küçük kızının sözünü bir sevgi ifadesi olarak değil, küçümseme olarak anlamış. Kızı ne demek istediğini anlatmaya fırsat bulamadan saraydan uzaklaştırılmış. Böylece birkaç kelimenin yanlış anlaşılması, bir ailenin arasına uzun yıllar sürecek bir ayrılık koymuş.

Küçük kız, bildiği düzenin dışında yaşamayı öğrenmek zorunda kalmış. Zaman geçtikçe büyümüş, kendi hayatını kurmuş. Eski sarayına dönmese de babasına söylediği sözlerin anlamını unutmamış. Onu inciten şey, babasının öfkesi kadar sevgisinin anlaşılamamış olmasıymış. Yine de bir gün her şeyi açıklayabileceğini düşünmüş.

Yıllar sonra babasını bir ziyafete davet etme fırsatı doğmuş. Sofra özenle hazırlanmış, yemekler sıralanmış; ancak küçük kız aşçılardan önemli bir şey istemiş: O gün bütün yemekler tuzsuz pişirilecekmiş. Ziyafetin konukları masaya oturduğunda her şeyin güzel göründüğünü fark etmiş. Fakat padişah lokmaları tattıkça bir eksiklik hissetmeye başlamış.

Önündeki çeşit çeşit yemek göze güzel görünse de tadı yerinde değilmiş. Padişah bunun nedenini sorunca sofranın tuzsuz hazırlandığı anlaşılmış. İşte o zaman küçük kız ona yıllar önce söylediklerini hatırlatmış. Tuz tek başına övünülecek bir şey gibi görünmeyebilirmiş; ama yokluğunda en güzel yemek bile tadını kaybedermiş. Kızının sevgisi de onun hayatındaki böyle temel bir değermiş.

Padişah sonunda sözlerin ardındaki anlamı kavramış. Küçük kızının kendisini küçümsemediğini, tersine hayatın vazgeçilmez bir parçasına benzettiğini anlamış. Hatasından utanmış ve kızıyla barışmış. Uzun ayrılıktan sonra yeniden bir araya gelmeleri ikisine de sevinç vermiş.

O günden sonra padişah, bir sözün değerini yalnız kulağa ne kadar görkemli geldiğiyle ölçmemek gerektiğini bilirmiş. Kıymetli Tuz'un masalı da sevginin bazen gösterişli sözlerde değil, gündelik yaşamın en sade ama en gerekli şeylerinde gizlendiğini anlatırmış.`,
    metinTuru: 'Özgün yeniden anlatım', // Kaynaktaki olaylar esas alınarak yeniden yazılmıştır; birebir kaynak metin değildir. // Kıymetli Tuz'un tam metni
    kaynak: 'https://www.masaloku.net/kiymetli-tuz/', yazarNotu: '',
    kategoriler: ['iyilik'], imageData: '', // BU ALANI SEN DEĞİŞTİR: Kıymetli Tuz PNG/JPEG
    resimKimligi: 'resim-kiymetli-tuz',
    resimAlt: 'Kum rengi zeminde beyaz ve açık turkuaz tuz kristali küpler; önlerinde turkuaz dalgalar.',
    yerlesim: 'sol', cerceve: 'altigen', desen: 'kristal',
    renkler: { zemin:'#E4F5F6', yuzey:'#FFFFFF', metin:'#16333C', baslik:'#0B6574', soluk:'#3A5962', vurgu:'#4DBAC8', panelVurgu:'#0B6574', dugme:'#0E6E7E', dugmeYazi:'#FFFFFF', kenar:'#B5E0E6', kart:'#0E7C8C' }
  }
];

/* ========== 2. İŞLEVLER ========== */
// Sayfanın hatırladığı küçük durumlar (tarayıcı hafızasında kalıcı kayıt değildir).
let seciliKategori = 'hepsi';
let sonKartId = '';
let anaKaydirma = 0;
let aktifMasalId = '';
let yaziBoyutu = 20;

// HTML içine değişken metin yerleştirilirken özel karakterleri güvenli hale getirir.
function kacir(deger) {
  return String(deger).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Türkçe aramalar için harfleri küçültür, aksanları ve özel harfleri sadeleştirir.
function metniSadelestir(metin) {
  const harfler = { 'ç':'c', 'ğ':'g', 'ı':'i', 'ö':'o', 'ş':'s', 'ü':'u', 'â':'a', 'î':'i', 'û':'u' };
  return String(metin).toLocaleLowerCase('tr-TR').replace(/[çğıöşüâîû]/g, function(harf) { return harfler[harf]; });
}

// Verilen id'ye ait masalı dizide bulur; bulunmazsa null döndürür.
function masalBul(id) {
  for (let i = 0; i < masallar.length; i++) {
    if (masallar[i].id === id) return masallar[i];
  }
  return null;
}

// imageData doldurulursa gerçek resim, boşsa SVG yedek çizimi oluşturur.
function gorselHtml(masal) {
  if (masal.imageData.indexOf('data:image/') === 0) {
    return '<img class="masal-fotograf" src="' + kacir(masal.imageData) + '" alt="' + kacir(masal.resimAlt) + '">';
  }
  return '<svg class="masal-svg" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + kacir(masal.resimAlt) + '"><use href="#' + kacir(masal.resimKimligi) + '"></use></svg>';
}

// Masal kartlarını arama ve kategoriyle eşleşen verilere göre yeniden çizer.
function kartlariCiz() {
  const sorgu = metniSadelestir(document.getElementById('masal-arama').value.trim());
  const bulunanlar = masallar.filter(function(masal) {
    const adEslesiyor = metniSadelestir(masal.ad).indexOf(sorgu) !== -1;
    const kategoriEslesiyor = seciliKategori === 'hepsi' || masal.kategoriler.indexOf(seciliKategori) !== -1;
    return adEslesiyor && kategoriEslesiyor;
  });
  const kartAlani = document.getElementById('masal-kartlari');
  kartAlani.innerHTML = '';
  bulunanlar.forEach(function(masal) {
    const sira = masallar.indexOf(masal) + 1;
    const kart = document.createElement('article');
    kart.className = 'masal-karti';
    kart.id = 'kart-' + masal.id;
    kart.tabIndex = 0;
    kart.setAttribute('role', 'link');
    kart.setAttribute('aria-label', masal.ad + ' masalını oku');
    kart.setAttribute('data-masal', masal.id);
    kart.style.setProperty('--kart-vurgu', masal.renkler.kart);
    kart.innerHTML = '<div class="kart-gorsel-cerceve"><div class="kart-gorsel-ic">' + gorselHtml(masal) + '</div></div>' +
      '<div class="kart-bilgi"><div class="kart-ust"><span class="kart-numara"><svg viewBox="-22 -22 44 44" aria-hidden="true"><g color="currentColor"><use href="#motif-yildiz"></use></g></svg><b>' + String(sira).padStart(2, '0') + '</b></span>' +
      '<span class="kart-etiket">' + kacir(kategoriler[masal.kategoriler[0]]) + '</span></div>' +
      '<strong class="kart-ad">' + kacir(masal.ad) + '</strong><span class="kart-tanitim">' + kacir(masal.kisaTanitim) + '</span>' +
      '<button class="kart-oku" type="button" data-masal="' + kacir(masal.id) + '">Masalı Oku <span aria-hidden="true">↗</span></button></div>';
    kartAlani.appendChild(kart);
  });
  document.getElementById('bos-sonuc').hidden = bulunanlar.length !== 0;
  document.getElementById('sonuc-sayisi').textContent = bulunanlar.length + ' masal bulundu';
}

// Süzme işlemini günceller; arama ve kategori aynı anda etkili olur.
function listeyiGuncelle() { kartlariCiz(); }

// Kategori düğmelerini tek kategori nesnesinden üretir ve seçili durumu işaretler.
function kategorileriCiz() {
  const alan = document.getElementById('kategori-dugmeleri');
  alan.innerHTML = '';
  for (const kimlik in kategoriler) {
    const dugme = document.createElement('button');
    dugme.type = 'button';
    dugme.className = 'kategori-dugme';
    dugme.textContent = kategoriler[kimlik];
    dugme.setAttribute('data-kategori', kimlik);
    dugme.setAttribute('aria-pressed', kimlik === seciliKategori ? 'true' : 'false');
    alan.appendChild(dugme);
  }
}

// Açılan masalın renklerini ve tasarım türlerini okuma ekranına uygular.
function temayiUygula(masal) {
  const alan = document.getElementById('masal-gorunumu');
  const cssAdlari = { zemin:'--zemin', yuzey:'--yuzey', metin:'--metin', baslik:'--baslik', soluk:'--soluk', vurgu:'--vurgu', panelVurgu:'--panel-vurgu', dugme:'--dugme', dugmeYazi:'--dugme-yazi', kenar:'--kenar' };
  for (const ad in cssAdlari) alan.style.setProperty(cssAdlari[ad], masal.renkler[ad]);
  alan.setAttribute('data-desen', masal.desen);
  alan.setAttribute('data-yerlesim', masal.yerlesim);
  alan.setAttribute('data-cerceve', masal.cerceve);
}

// Tam metni güvenli şekilde ayrı paragraflara böler. Boşsa yer tutucu gösterir.
function metniYaz(masal) {
  const alan = document.getElementById('masal-metni');
  alan.innerHTML = '';
  if (masal.metin.trim() === '') {
    const bos = document.createElement('div');
    bos.className = 'bos-metin';
    bos.textContent = 'Masalın tam metni bu alana gelecek…';
    alan.appendChild(bos);
  } else {
    const paragraflar = masal.metin.trim().split(/\n\s*\n/);
    paragraflar.forEach(function(paragraf) {
      const p = document.createElement('p');
      p.textContent = paragraf.trim();
      alan.appendChild(p);
    });
  }
}

// Yalnızca .masal-metni yazı boyutunu 16–32px arasında 2'şer değiştirir.
function yaziBoyutunuDegistir(fark) {
  yaziBoyutu = Math.max(16, Math.min(32, yaziBoyutu + fark));
  document.getElementById('masal-metni').style.fontSize = yaziBoyutu + 'px';
  document.getElementById('boyut-goster').textContent = yaziBoyutu + 'px';
  document.getElementById('boyut-kucult').disabled = yaziBoyutu === 16;
  document.getElementById('boyut-buyut').disabled = yaziBoyutu === 32;
}

// Önceki/sonraki masalı ve sekiz kısa yolu üretir; sıra sonunda başa döner.
function gecisleriYaz(masal) {
  const index = masallar.indexOf(masal);
  const onceki = masallar[(index - 1 + masallar.length) % masallar.length];
  const sonraki = masallar[(index + 1) % masallar.length];
  document.getElementById('onceki-masal').setAttribute('data-gecis', onceki.id);
  document.getElementById('onceki-ad').textContent = onceki.ad;
  document.getElementById('sonraki-masal').setAttribute('data-gecis', sonraki.id);
  document.getElementById('sonraki-ad').textContent = sonraki.ad;
  const liste = document.getElementById('mini-masallar');
  liste.innerHTML = '';
  masallar.forEach(function(m, i) {
    const dugme = document.createElement('button');
    dugme.className = 'mini-dugme';
    dugme.type = 'button';
    dugme.textContent = (i + 1) + '. ' + m.ad;
    dugme.setAttribute('data-gecis', m.id);
    if (m.id === masal.id) dugme.setAttribute('aria-current', 'true');
    liste.appendChild(dugme);
  });
}

// Bir masalın bütün bilgilerini gösterir ve başlığa klavye odağı verir.
function masaliGoster(masal) {
  const anaSayfa = document.getElementById('ana-sayfa');
  const okuma = document.getElementById('masal-gorunumu');
  if (!anaSayfa.hidden) anaKaydirma = window.scrollY;
  aktifMasalId = masal.id;
  temayiUygula(masal);
  document.getElementById('masal-baslik').textContent = masal.ad;
  document.getElementById('masal-giris').textContent = masal.kisaTanitim;
  const etiketler = [];
  masal.kategoriler.forEach(function(k) { etiketler.push(kategoriler[k]); });
  document.getElementById('masal-ust-etiket').textContent = etiketler.join(' · ');
  document.getElementById('buyuk-gorsel').innerHTML = gorselHtml(masal);
  document.getElementById('masal-ozet').textContent = masal.ozet;
  document.getElementById('masal-kaynak-link').href = masal.kaynak;
  const not = document.getElementById('masal-yazar-notu');
  not.textContent = masal.yazarNotu;
  not.hidden = masal.yazarNotu === '';
  document.getElementById('metin-turu').textContent = masal.metinTuru + ' · Kaynaktaki olay örgüsü temel alınmıştır; özgün kaynağın birebir metni değildir.';
  metniYaz(masal);
  gecisleriYaz(masal);
  yaziBoyutu = 20;
  yaziBoyutunuDegistir(0);
  anaSayfa.hidden = true;
  okuma.hidden = false;
  document.title = masal.ad + ' | Bir Masal, Bin Hayal';
  window.scrollTo(0, 0);
  document.getElementById('masal-baslik').focus({ preventScroll: true });
}

// Ana sayfayı eski kaydırma konumuyla gösterir; son kart yeniden odaklanır.
function anaSayfayiGoster() {
  const okuma = document.getElementById('masal-gorunumu');
  if (okuma.hidden) return;
  okuma.hidden = true;
  document.getElementById('ana-sayfa').hidden = false;
  aktifMasalId = '';
  document.title = 'Bir Masal, Bin Hayal | Dijital Masal Arşivi';
  window.scrollTo(0, anaKaydirma);
  const kart = document.getElementById('kart-' + sonKartId);
  if (kart) kart.focus({ preventScroll: true });
}

// Adres çubuğundaki #masal-... bilgisini okuyarak doğru görünümü seçer.
function adresiOku() {
  const eslesme = location.hash.match(/^#masal-(.+)$/);
  const masal = eslesme ? masalBul(decodeURIComponent(eslesme[1])) : null;
  if (masal) masaliGoster(masal);
  else anaSayfayiGoster();
}

// Kaynakçayı sekiz masalın kaynak adreslerinden oluşturur.
function kaynakcayiYaz() {
  const liste = document.getElementById('kaynakca-listesi');
  liste.innerHTML = '';
  masallar.forEach(function(masal) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(masal.ad + '. Masal Oku. '));
    const link = document.createElement('a');
    link.href = masal.kaynak;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = masal.kaynak;
    li.appendChild(link);
    li.appendChild(document.createTextNode(' (Erişim tarihi: ' + erisimTarihi + ')'));
    liste.appendChild(li);
  });
}

/* ========== 3. OLAY DİNLEYİCİLERİ VE İLK AÇILIŞ ========== */
// Olay delegasyonu: Bütün kartlar için tek tıklama dinleyicisi yeterlidir.
document.getElementById('masal-kartlari').addEventListener('click', function(olay) {
  const tiklanan = olay.target.closest('[data-masal]');
  if (!tiklanan) return;
  sonKartId = tiklanan.getAttribute('data-masal');
  location.hash = 'masal-' + sonKartId;
});
// Kartın kendisi de Enter/Boşluk tuşuyla açılabilir.
document.getElementById('masal-kartlari').addEventListener('keydown', function(olay) {
  const kart = olay.target.closest('.masal-karti');
  if (kart && olay.target === kart && (olay.key === 'Enter' || olay.key === ' ')) {
    olay.preventDefault();
    sonKartId = kart.getAttribute('data-masal');
    location.hash = 'masal-' + sonKartId;
  }
});
document.getElementById('masal-arama').addEventListener('input', listeyiGuncelle);
document.getElementById('kategori-dugmeleri').addEventListener('click', function(olay) {
  const dugme = olay.target.closest('[data-kategori]');
  if (!dugme) return;
  seciliKategori = dugme.getAttribute('data-kategori');
  kategorileriCiz();
  listeyiGuncelle();
});
document.getElementById('masal-gorunumu').addEventListener('click', function(olay) {
  if (olay.target.closest('[data-eve]')) location.hash = '';
});
document.getElementById('masal-gecisleri').addEventListener('click', function(olay) {
  const dugme = olay.target.closest('[data-gecis]');
  if (dugme) location.hash = 'masal-' + dugme.getAttribute('data-gecis');
});
document.getElementById('boyut-kucult').addEventListener('click', function() { yaziBoyutunuDegistir(-2); });
document.getElementById('boyut-buyut').addEventListener('click', function() { yaziBoyutunuDegistir(2); });
// Özet düzenlemeleri sayfa açık kaldıkça dizide saklanır; HTML dosyasına yazılmaz.
document.getElementById('masal-ozet').addEventListener('input', function() {
  const masal = masalBul(aktifMasalId);
  if (masal) masal.ozet = this.textContent;
});
// Safari geri/ileri tuşları dahil tüm görünüm değişimlerinin kaynağı hash'tir.
window.addEventListener('hashchange', adresiOku);
// Sayfa ilk açılırken kartları ve kaynakçayı hazırlar, sonra mevcut adresi okur.
kategorileriCiz();
kartlariCiz();
kaynakcayiYaz();
adresiOku();

/*
GÖRSEL VE METİN DÜZENLEME KILAVUZU (BU YORUM script.js DOSYASININ SONUNDADIR)
1. Bu dosyada Ctrl+F veya Command+F ile 'const masallar = [' ifadesini bul.
2. Her nesnenin başında // 1 — YÜREK ANA gibi hangi masal olduğu yazılıdır.
3. O masalın 'metin: `...' alanında hazır özgün yeniden anlatım bulunmaktadır.
   İstersen iki ters tırnak arasındaki metni kendi metninle değiştirebilirsin.
   Örnek: metin: `Bir varmış, bir yokmuş.

   Kahraman ormanın yolunu tutmuş.`
   Boş satır yeni paragraf oluşturur. Sekiz masalın metni bu sürümde DOLUDUR.
4. 'ozet: ...' alanını değiştirirsen okuma sayfasındaki özet değişir.
   Okuma sayfasında özetin üzerine tıklayarak da geçici düzenleme yapabilirsin.
5. 'imageData: \'\'' alanına kendi resminin data URI'sini yapıştırabilirsin.
   Örnek: imageData: 'data:image/jpeg;base64,/9j/4AAQ...'
   Doluysa kart ve büyük görselde senin resmin gösterilir; boşsa SVG çizimi görünür.
6. Mac Terminal: base64 -i resim.png | tr -d '\n' | pbcopy
   Panodaki metnin başına 'data:image/png;base64,' ekle.
7. Yerleşimi, çerçeveyi, deseni ve renkleri kendi masal nesnesinden değiştirebilirsin.
8. Kodda değişiklikten sonra dosyayı kaydet; Safari'de Command+R ile yenile.
*/
