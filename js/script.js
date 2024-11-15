document.addEventListener("mousemove", function (event) {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.pageY - eyeCenterY, event.pageX - eyeCenterX);
        const offsetX = Math.cos(angle) * 10;
        const offsetY = Math.sin(angle) * 10;
        eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

// Sesli cevapları sağlamak için Web Speech API'yi kullanıyoruz.
const synth = window.speechSynthesis;

// Mesajı sesli yanıt olarak söyleyen fonksiyon
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'az';  // Azerbaycan Türkçesi
    synth.speak(utterance);
}

// Mesajı gönderme ve yanıt alma fonksiyonu
async function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (!userInput) return;

    const chatBox = document.getElementById("chatBox");

    // Kullanıcı mesajını göster
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user-message";
    userMessageElement.textContent = userInput;
    chatBox.appendChild(userMessageElement);

    // Kullanıcı mesajını küçük harfe dönüştür (büyük/küçük fark etmeyecek)
    const normalizedMessage = userInput.toLowerCase();

    // Bot cevabını belirle (bu kısmı OpenAI API veya başka bir backend kullanarak geliştirebilirsiniz)
    let botReply = "";
    if (normalizedMessage.includes("necəsən")) {
        botReply = "Mən yaxşıyam, sizə necə kömək edə bilərəm?";
    } else if (normalizedMessage.includes("adın nədir")) {
        botReply = "Mənim adım CanikoBotdu.";
    } else if (normalizedMessage.includes("sən nə edirsən")) {
        botReply = "Səninlə danışmaq üçün buradayam!";
    } else if (normalizedMessage.includes("sağ ol") || normalizedMessage.includes("sağol")||normalizedMessage.includes("tşk")||normalizedMessage.includes("təşəkkür")) {
        botReply = "Dəyməz! Başqa nə soruşmaq istərdiniz?";
    } else if (normalizedMessage.includes("salam")||normalizedMessage.includes("salam qaqa")||normalizedMessage.includes("salam əə")||normalizedMessage.includes("salam canikobot")||normalizedMessage.includes("salam balaca")) {
        botReply = "Salam Qaqa";
        
    } else if (normalizedMessage.includes("saat neçədir") || normalizedMessage.includes("saat neçədi")) {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        botReply = `Hazırda saat ${hours}:${minutes}-dir.`;
    }
    else if (normalizedMessage.includes("yeri get")||normalizedMessage.includes("getdə")||normalizedMessage.includes("siktir getdə")||normalizedMessage.includes("vızqırt")||normalizedMessage.includes("rədd ol")) {
        botReply = "mən robotam yeriyə bilmirəm";
        
    }
    else if (normalizedMessage.includes("xəci kimdi")) {
        botReply = "Xəci Xədicənin qısaltmasıdı";
    } 
    else if (normalizedMessage.includes("sikdir")) {
        botReply = "Ayıb olsunnnnn";
    } 
    else if (normalizedMessage.includes("amcuk")) {
        botReply = "AAAAAAAAAAAAAAAAAAAA";
    } 
    
    else if (normalizedMessage.includes("sənin adın nədi") || normalizedMessage.includes("sən kimsən") || normalizedMessage.includes("adın nə")) {
        botReply = "Mənim Adım CanikoBotdu mən Əyyub Tərəfindən Yazılmışam";
    }
    else if (normalizedMessage.includes("ikinci dünya müharibəsi")||normalizedMessage.includes("ikinci dünya müharibəsi haqqında")||normalizedMessage.includes("ikinci dünya müharibəsi haqqında danış")) {
        botReply = "İkinci Dünya Müharibəsi 1939-cu ildən 1945-ci ilə qədər davam etmiş və bir çox ölkənin iştirak etdiyi qlobal bir müharibə olmuşdur.";
    } else if (normalizedMessage.includes("roma imperiyası")||normalizedMessage.includes("roma imperiyası haqqında ")||normalizedMessage.includes("roma imperiyası haqqında danış")||normalizedMessage.includes("roma imperiyası nə etmişdi")) {
        botReply = "Roma İmperiyası qədim dünyanın ən güclü imperiyalarından biri idi və M.Ö. 27-ci ildən M.S. 476-cı ilə qədər mövcud olmuşdur.";
    } else if (normalizedMessage.includes("azərbaycan tarixi")) {
        botReply = "Azərbaycan tarixi qədim dövrlərə uzanır. Bu ərazi bir çox imperiya və dövlətin tərkibində olmuş, 1918-ci ildə isə Azərbaycan Xalq Cümhuriyyəti yaradılmışdır.";
    }
    // Azərbaycan tarixi haqqında məlumatlar
    else if (normalizedMessage.includes("şirvanşahlar dövləti")) {
        botReply = "Şirvanşahlar dövləti qədim Azərbaycan dövlətidir və IX əsrdən XVI əsrə qədər mövcud olmuşdur. Şirvanşahlar mədəniyyət və memarlıq sahəsində böyük irs qoyublar.";
    } else if (normalizedMessage.includes("qarabağ münaqişəsi")) {
        botReply = "Qarabağ münaqişəsi, Azərbaycanın Dağlıq Qarabağ bölgəsi üzərində Ermənistan ilə yaşadığı mübahisədir. Münaqişə 1988-ci ildən başlamış və 2020-ci ildə yeni bir mərhələyə keçmişdir.";
    }

    // Dünya tarixi haqqında məlumatlar
    else if (normalizedMessage.includes("böyük fransız inqilabı")) {
        botReply = "Böyük Fransız İnqilabı 1789-cu ildə başlamış və Fransada monarxiyanın sonunu gətirmişdir. Bu inqilab Avropada sosial və siyasi dəyişikliklərə səbəb olmuşdur.";
    } else if (normalizedMessage.includes("soyuq müharibə")) {
        botReply = "Soyuq Müharibə, II Dünya Müharibəsindən sonra ABŞ və Sovet İttifaqı arasında baş verən geosiyasi qarşıdurmadır. Bu, 1991-ci ildə SSRİ-nin dağılması ilə başa çatmışdır.";
    } else if (normalizedMessage.includes("osmanlı imperiyası")) {
        botReply = "Osmanlı İmperiyası 1299-cu ildə qurulmuş və 1922-ci ildə sona çatmışdır. Bu imperiya Şərqi Avropa, Qərbi Asiya və Şimali Afrika ərazilərində geniş yayılan bir dövlət idi.";
    }

    // Müxtəlif tarixi şəxsiyyətlər haqqında məlumatlar
    else if (normalizedMessage.includes("napoleon bonapart")) {
        botReply = "Napoleon Bonapart Fransanın məşhur sərkərdəsi və imperatorudur. 1804-cü ildə özünü imperator elan edib və Avropanın böyük hissəsini fəth etmişdir.";
    } else if (normalizedMessage.includes("çingiz xan")) {
        botReply = "Çingiz Xan, Monqol imperiyasının qurucusudur və Asiya ilə Avropanın böyük hissəsini fəth edən sərkərdədir. Onun idarə etdiyi Monqol imperiyası tarixin ən böyük quru imperiyası olub.";
    } else if (normalizedMessage.includes("albert eynşteyn")) {
        botReply = "Albert Eynşteyn məşhur alman fizikidir. 1905-ci ildə nisbi nəzəriyyəni irəli sürmüşdür və fizika elminə mühüm töhfələr vermişdir.";
    }

    // Digər tarixi hadisələr haqqında məlumatlar
    else if (normalizedMessage.includes("böyük depressiya")) {
        botReply = "Böyük Depressiya 1929-cu ildə ABŞ-da başlamış və bütün dünyaya təsir göstərmiş iqtisadi tənəzzül dövrüdür. Bu dövr işsizlik və yoxsulluqla xarakterizə olunurdu.";
    } else if (normalizedMessage.includes("hüquqlar bəyannaməsi")) {
        botReply = "İnsan Hüquqları Bəyannaməsi 1789-cu ildə Fransada qəbul edilmiş bir sənəddir və insan hüquqları və azadlıqlarına dair prinsipləri təsbit edir.";
    }
    // Azərbaycan tarixi
    else if (normalizedMessage.includes("xalq cümhuriyyəti")) {
        botReply = "Azərbaycan Xalq Cümhuriyyəti 1918-ci ildə qurulmuş və müsəlman şərqində ilk demokratik respublika olmuşdur. 1920-ci ildə isə Sovet qoşunlarının işğalı ilə sona çatmışdır.";
    } else if (normalizedMessage.includes("nərgiztəpə mədəniyyəti")) {
        botReply = "Nərgiztəpə mədəniyyəti qədim Azərbaycan ərazisində yerləşən erkən yaşayış yerlərindən biridir. Bu ərazidə erkən dövr insanlar haqqında arxeoloji sübutlar aşkar olunub.";

        // Qədim sivilizasiyalar və hadisələr
    } else if (normalizedMessage.includes("misir fironları")) {
        botReply = "Qədim Misir fironları ölkənin hökmdarları olub və özlərini tanrı hesab edirdilər. Ən məşhur fironlardan biri Tutanxamon olmuşdur.";
    } else if (normalizedMessage.includes("maçupikçu")) {
        botReply = "Maçupikçu, Peruda yerləşən qədim İnka şəhəridir. XV əsrdə qurulmuş və dağların zirvəsində tikilmişdir, indi məşhur turizm məkanıdır.";
    } else if (normalizedMessage.includes("spartak")) {
        botReply = "Spartak Roma imperiyasında kölə üsyanına rəhbərlik edən məşhur gladiatordur. O, azadlıq üçün böyük mübarizə aparmışdır.";

        // Avropa tarixi
    } else if (normalizedMessage.includes("orta əsrlər")) {
        botReply = "Orta əsrlər təxminən 5-ci əsrdən 15-ci əsrə qədər olan dövrü əhatə edir. Bu dövr Avropada feodalizm, qəsrlər və xaç yürüşləri ilə xarakterizə olunur.";
    } else if (normalizedMessage.includes("renessans")) {
        botReply = "Renessans, XIV-XVII əsrlər arasında Avropada yaşanan mədəni intibah dövrüdür. Bu dövrdə sənət və elm inkişaf etmiş, Leonardo da Vinci kimi dahi sənətkarlar ortaya çıxmışdır.";
    } else if (normalizedMessage.includes("karolinq renesansı")) {
        botReply = "Karolinq Renesansı VIII və IX əsrlərdə Karolinq sülaləsinin hakimiyyəti dövründə Qərbi Avropada mədəniyyətin yenidən dirçəlişi prosesidir.";

        // Asiya və Orta Şərq tarixi
    } else if (normalizedMessage.includes("abbasilər dövləti")) {
        botReply = "Abbasilər dövləti 750-ci ildə qurulmuş və Bağdad şəhərində yerləşmişdir. İslamın qızıl dövrünü yaşamış və elmin inkişafında mühüm rol oynamışdır.";
    } else if (normalizedMessage.includes("meiji islahatları")) {
        botReply = "Meiji İslahatları, 1868-ci ildə Yaponiyanın modernləşmə prosesini başlatmış və ölkənin inkişafını sürətləndirmiş bir islahat dövrüdür.";
    } else if (normalizedMessage.includes("qədim çin")) {
        botReply = "Qədim Çin mədəniyyət və elm sahəsində böyük irs qoymuş sivilizasiyadır. Çin səddi, ixtiraları və Konfutsi fəlsəfəsi ilə məşhurdur.";

        // Müasir dövr
    } else if (normalizedMessage.includes("birləşmiş millətlər təşkilatı")) {
        botReply = "Birləşmiş Millətlər Təşkilatı (BMT) 1945-ci ildə qurulmuş və dünya sülhü, təhlükəsizliyi və beynəlxalq əməkdaşlığı təşviq etməyi hədəfləyən bir təşkilatdır.";
    } else if (normalizedMessage.includes("avropa birliyi")) {
        botReply = "Avropa Birliyi (AB), 27 Avropa ölkəsini birləşdirən iqtisadi və siyasi bir birlikdir. İkinci Dünya Müharibəsindən sonra Avropada sülhü və rifahı təşviq etmək məqsədi ilə qurulmuşdur.";
    } else if (normalizedMessage.includes("soyuq müharibə dövrü")) {
        botReply = "Soyuq Müharibə dövrü ABŞ və SSRİ arasında nüfuz mübarizəsinin yaşandığı, silah yarışının və kosmos tədqiqatlarının inkişaf etdiyi bir dövrdür.";

        // Müxtəlif tarixi şəxsiyyətlər
    } else if (normalizedMessage.includes("atilla")) {
        botReply = "Atilla, V əsrdə Avropada Hun İmperatorluğunun hökmdarı olmuşdur və Qərbi Roma İmperiyasını qorxuya salmışdır.";
    } else if (normalizedMessage.includes("iv ivan")) {
        botReply = "IV İvan, Rusiyada 1547-ci ildən 1584-cü ilə qədər çar olaraq hökm sürən, tarixdə daha çox Qorxulu İvan adı ilə tanınan hökmdardır.";
    } else if (normalizedMessage.includes("məhəmməd peyğəmbər")) {
        botReply = "Məhəmməd Peyğəmbər, İslam dininin qurucusu və son peyğəmbər sayılır. 610-cu ildə vəhy alaraq İslamı təbliğ etməyə başlamışdır.";
    }
    // Azərbaycan tarixi
    else if (normalizedMessage.includes("gəncə döyüşü")) {
        botReply = "Gəncə Döyüşü, 1826-cı ildə Rusiya-İran müharibəsi zamanı baş vermiş və Azərbaycan ərazisində Rusiya ilə İran qüvvələri arasında döyüş olmuşdur.";
    } else if (normalizedMessage.includes("koroğlu")) {
        botReply = "Koroğlu, Azərbaycan xalq ədəbiyyatında xalq qəhrəmanı sayılan və zalım hakimlərə qarşı mübarizə aparan bir dastan qəhrəmanıdır.";

        // Qədim və Orta Dövrlər
    } else if (normalizedMessage.includes("yunan-pers müharibələri")) {
        botReply = "Yunan-Pers müharibələri eramızdan əvvəl 5-ci əsrdə Yunan şəhər-dövlətləri ilə Pers İmperiyası arasında baş vermişdir. Marafon və Termopil döyüşləri bu müharibənin məşhur döyüşlərindəndir.";
    } else if (normalizedMessage.includes("kalka döyüşü")) {
        botReply = "Kalka Döyüşü 1223-cü ildə Monqollarla Rus knyazları arasında baş vermişdir və Monqolların zəfəri ilə nəticələnmişdir.";
    } else if (normalizedMessage.includes("maya sivilizasiyası")) {
        botReply = "Maya sivilizasiyası Mərkəzi Amerikada inkişaf etmiş qədim bir sivilizasiyadır. Onlar astronomiya, yazı və memarlıq sahələrində irəliləyişlərə sahib olublar.";

        // Qərb İmperiyaları və Kolonializm
    } else if (normalizedMessage.includes("böyük britaniya imperiyası")) {
        botReply = "Böyük Britaniya İmperiyası tarixin ən geniş əraziləri əhatə edən imperiyası olub və 'gün batmayan imperiya' adlandırılıb. XIX əsrdə zirvəsinə çatmışdır.";
    } else if (normalizedMessage.includes("ispaniya qızıl əsr")) {
        botReply = "İspaniyanın Qızıl Əsri, XV və XVII əsrlər arasında İspaniyada sənət, ədəbiyyat və elmdə mühüm irəliləyişlərin olduğu dövrdür.";
    } else if (normalizedMessage.includes("kolonial dövr")) {
        botReply = "Kolonial Dövr, Avropa dövlətlərinin dünyanın müxtəlif bölgələrini müstəmləkə etməsi dövrüdür. Bu dövr XVI əsrdən XIX əsrə qədər davam etmişdir.";

        // Elmi Nailiyyətlər və İnnovasiyalar
    } else if (normalizedMessage.includes("kopernik nəzəriyyəsi")) {
        botReply = "Kopernik nəzəriyyəsi, Nikola Kopernik tərəfindən irəli sürülmüş və Günəşin kainatın mərkəzində olduğunu bildirən heliosentrik nəzəriyyədir.";
    } else if (normalizedMessage.includes("sənaye inqilabı")) {
        botReply = "Sənaye İnqilabı XVIII və XIX əsrlərdə İngiltərədə başlamış və sənayenin texnoloji cəhətdən inkişafı ilə nəticələnmiş bir dövrdür.";
    } else if (normalizedMessage.includes("aleksandr fleming")) {
        botReply = "Aleksandr Fleming, penicillin adlı antibiotiki kəşf etmiş Şotlandiyalı bioloqdur və bu kəşf tibbdə inqilaba səbəb olmuşdur.";

        // Müxtəlif Döyüşlər
    } else if (normalizedMessage.includes("trafalqar döyüşü")) {
        botReply = "Trafalqar Döyüşü 1805-ci ildə Böyük Britaniya ilə Fransa və İspaniya donanmaları arasında baş vermişdir. Bu döyüş Britaniyanın zəfəri ilə nəticələnmişdir.";
    } else if (normalizedMessage.includes("troy müharibəsi")) {
        botReply = "Troy Müharibəsi, Yunan mifologiyasında yer alan və Troya şəhəri ilə Yunan dövlətləri arasında baş verən əfsanəvi müharibədir.";
    } else if (normalizedMessage.includes("waterloo döyüşü")) {
        botReply = "Waterloo Döyüşü 1815-ci ildə baş verib və Napoleonun məğlubiyyəti ilə nəticələnmişdir. Bu döyüş Napoleon müharibələrinin sonu olmuşdur.";

        // İnkişaf etmiş Tarixi Şəxsiyyətlər
    } else if (normalizedMessage.includes("muxtar qazı")) {
        botReply = "Muxtar Qazı, Cənubi Qafqazda fəaliyyət göstərmiş, 1918-ci ildə Azərbaycan Xalq Cümhuriyyətinin formalaşmasına töhfə vermişdir.";
    } else if (normalizedMessage.includes("elizabet I")) {
        botReply = "Elizabet I, İngiltərə kraliçası və İngiltərənin Qızıl Əsr adlanan dövründə hökmranlıq etmişdir. Onun dövründə İngiltərə güclü bir dəniz dövlətinə çevrilmişdir.";
    } else if (normalizedMessage.includes("sokrat")) {
        botReply = "Sokrat qədim yunan filosofudur və fəlsəfi dialoqları ilə tanınır. O, etik suallar üzərində düşünməyi təbliğ etmişdir.";

        // Amerikan Tarixi və Mədəniyyəti
    } else if (normalizedMessage.includes("vətəndaş müharibəsi")) {
        botReply = "ABŞ Vətəndaş Müharibəsi 1861-1865-ci illər arasında ABŞ-da baş verib və Şimal ilə Cənub arasında köləlik məsələsi ilə bağlı müharibədir.";
    } else if (normalizedMessage.includes("apollon missiyası")) {
        botReply = "Apollon Missiyası, ABŞ tərəfindən Ayı tədqiq etmək üçün başladılan kosmik proqramdır və Apollon 11 missiyası 1969-cu ildə ilk insanları Aya çatdırmışdır.";

        // Ümumi Tarix Mövzuları
    } else if (normalizedMessage.includes("imperiya")) {
        botReply = "Imperiya, bir hökmdarın və ya dövlətin bir neçə ölkəni və xalqı idarə etdiyi geniş bir dövlət formasına deyilir. Roma, Osmanlı və Monqol imperiyaları məşhur imperiyalardır.";
    } else if (normalizedMessage.includes("feodalizm")) {
        botReply = "Feodalizm, orta əsrlərdə Avropada geniş yayılmış bir siyasi və iqtisadi sistemdir, burada torpaq ağaları öz torpaqlarını idarə etmək üçün torpaq və xidmətləri əvəz edirdi.";
    }
    // Azərbaycan tarixi və Mədəniyyət
    else if (normalizedMessage.includes("naxçıvan muxtar respublikası")) {
        botReply = "Naxçıvan Muxtar Respublikası, Azərbaycanın tərkibində xüsusi muxtar statusa malik bir ərazidir və strateji əhəmiyyətə malikdir.";
    } else if (normalizedMessage.includes("molla nəsrəddin")) {
        botReply = "Molla Nəsrəddin, Azərbaycan ədəbiyyatında satirik jurnal və xalq hekayələrinin qəhrəmanı kimi məşhurdur. Bu hekayələrdə dərin məna və məzhəkə var.";

        // Orta Asiya və Qafqaz Tarixi
    } else if (normalizedMessage.includes("qızıl orda dövləti")) {
        botReply = "Qızıl Orda Dövləti XIII əsrdə Monqolların Avrasiyada qurduğu böyük bir dövlətdir və Rusiya, Qafqaz və Orta Asiyanı əhatə etmişdir.";
    } else if (normalizedMessage.includes("qacarlar dövləti")) {
        botReply = "Qacarlar dövləti 1796-cı ildə Fətəli şah tərəfindən qurulmuş və XIX əsrin sonlarına qədər İranın böyük bir hissəsinə nəzarət etmiş bir dövlət olmuşdur.";

        // Antik Yunan və Roma
    } else if (normalizedMessage.includes("demokratiya")) {
        botReply = "Demokratiya, ilk dəfə qədim Yunanıstanda ortaya çıxmış bir idarəetmə formasındır. Bu idarəetmə növündə xalq öz liderlərini seçir və iştirak edir.";
    } else if (normalizedMessage.includes("sezar")) {
        botReply = "Gaius Julius Sezar Roma İmperiyasının tanınmış lideridir və diktatorluğa yüksələrək, imperiyanın genişlənməsinə səbəb olmuşdur. Sezarın qətl edilməsi ilə Respublika dövrü sona çatmışdır.";

        // Rusiya Tarixi
    } else if (normalizedMessage.includes("bolşevik inqilabı")) {
        botReply = "Bolşevik İnqilabı 1917-ci ildə Rusiyada baş vermiş və Çar hökumətini devirmişdir. Bu inqilab nəticəsində Sovet Sosialist Respublikalar İttifaqı qurulmuşdur.";
    } else if (normalizedMessage.includes("lenin")) {
        botReply = "Vladimir Lenin Bolşevik Partiyasının lideri və SSRİ-nin qurucusudur. O, sosialist dövlətin əsasını qoymuş və ilk rəhbəri olmuşdur.";

        // Böyük İmperiyalar və Müqavilələr
    } else if (normalizedMessage.includes("vestfaliya müqaviləsi")) {
        botReply = "Vestfaliya Müqaviləsi, 1648-ci ildə Otuzillik müharibəni bitirən və Avropada müasir dövlətçilik sistemini əsaslandıran bir müqavilədir.";
    } else if (normalizedMessage.includes("berlin konfransı")) {
        botReply = "Berlin Konfransı 1884-1885-ci illərdə Avropa ölkələrinin Afrikanı bölüşdürmək üçün keçirdiyi bir görüşdür və müstəmləkəçilik dövrünü sürətləndirmişdir.";

        // Elmi və Texnoloji İnqilablar
    } else if (normalizedMessage.includes("nyuton")) {
        botReply = "İsaak Nyuton ingilis fizik və riyaziyyatçıdır. Onun cazibə qanunu fizika elminə mühüm təsir göstərmiş və elm tarixində inqilab yaratmışdır.";
    } else if (normalizedMessage.includes("dünya ekskursiyası")) {
        botReply = "Ferdinand Magellan 1519-cu ildə dünya ətrafında ilk səfərə başlamış və bu səfər dünya səyahətinin mümkün olduğunu sübut etmişdir.";

        // Tarixdə Əlamətdar Döyüşlər və Qələbələr
    } else if (normalizedMessage.includes("mənfissər döyüşü")) {
        botReply = "Mənfissər Döyüşü 1799-cu ildə Napoleon Bonapart ilə Osmanlı və Britaniya qüvvələri arasında baş vermiş və Misirin Britaniyanın təsiri altına düşməsinə səbəb olmuşdur.";
    } else if (normalizedMessage.includes("alamo döyüşü")) {
        botReply = "Alamo Döyüşü, Texasın Meksikadan müstəqillik uğrunda mübarizəsində məşhur bir döyüşdür və ABŞ tarixində xüsusi yer tutur.";

        // İslam Dünyası və Orta Şərq
    } else if (normalizedMessage.includes("abbasilər")) {
        botReply = "Abbasilər Xilafəti 750-ci ildə yaranmış və İslam dünyasında elmin və mədəniyyətin qızıl dövrünü yaşatmış bir xilafətdir.";
    } else if (normalizedMessage.includes("əhli-beyt")) {
        botReply = "Əhli-Beyt, İslam peyğəmbəri Məhəmmədin ailəsi və yaxınlarına verilən addır. Bu ailənin üzvləri İslam dünyasında dərin hörmətə malikdirlər.";

        // Müasir Avropa Tarixi
    } else if (normalizedMessage.includes("bismark")) {
        botReply = "Otto von Bismark Almaniyanın birləşdirilməsində böyük rol oynamış siyasətçidir və Almaniya İmperatorluğunun qurucularından biri hesab olunur.";
    } else if (normalizedMessage.includes("nasizm")) {
        botReply = "Nasizm, Adolf Hitlerin başçılıq etdiyi faşist ideologiyadır və II Dünya Müharibəsi zamanı Almaniyada geniş yayılmışdır. Nasizm irqçiliyə əsaslanırdı.";
    }else if (normalizedMessage.includes("astronomiya")) {
            botReply = "Astronomiya kainatı və səma cisimlərini öyrənən bir elmdir.";
        }
        
        // Tarixin Mühüm Keçidləri və Hadisələri
     else if (normalizedMessage.includes("yüzillik müharibə")) {
        botReply = "Yüzillik Müharibə, 1337-1453-cü illərdə İngiltərə ilə Fransa arasında baş vermiş uzun müharibələr seriyasıdır və Fransa torpaqlarının taleyini müəyyən etmişdir.";
    } else if (normalizedMessage.includes("böyük sərginin açılışı")) {
        botReply = "Böyük Sərgi, 1851-ci ildə Londonda sənaye və texnoloji inqilabın nailiyyətlərini nümayiş etdirmək üçün təşkil edilmişdir və Qədim Kristal Sarayda keçirilmişdir.";
    } else if (normalizedMessage.includes("atom bombası")) {
        botReply = "Atom bombası ilk dəfə ABŞ tərəfindən Yaponiyanın Hiroşima və Naqasaki şəhərlərinə atılmışdır. Bu hadisə İkinci Dünya Müharibəsini sona çatdırmışdır.";
    }else if (/(\d+)\s*([\+\-\*\/])\s*(\d+)/.test(userInput)) {
            const mathExpression = userInput.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
            const num1 = parseFloat(mathExpression[1]);
            const operator = mathExpression[2];
            const num2 = parseFloat(mathExpression[3]);
            
            switch (operator) {
                case "+":
                    botReply = `Nəticə: ${num1 + num2}`;
                    break;
                case "-":
                    botReply = `Nəticə: ${num1 - num2}`;
                    break;
                case "*":
                    botReply = `Nəticə: ${num1 * num2}`;
                    break;
                case "/":
                    botReply = num2 !== 0 ? `Nəticə: ${num1 / num2}` : "Sıfıra bölmə mümkün deyil.";
                    break;
            }   
} 
else if (normalizedMessage.includes("azərbaycanın paytaxtı") || normalizedMessage.includes("bakı haradadır")) {
    botReply = "Azərbaycanın paytaxtı Bakı şəhəridir və Xəzər dənizinin qərb sahilində yerləşir.";
} else if (normalizedMessage.includes("everest dağı")) {
    botReply = "Everest dağı Himalay dağlarında yerləşir və 8,848 metr hündürlüyü ilə dünyanın ən yüksək dağıdır.";
} else if (normalizedMessage.includes("sahara səhrası")) {
    botReply = "Sahara səhrası dünyanın ən böyük isti səhrasıdır və Şimali Afrikada yerləşir.";
} else if (normalizedMessage.includes("amazon çayı")) {
    botReply = "Amazon çayı Cənubi Amerikada yerləşir və dünyanın ən böyük çayı sayılır.";
} else if (normalizedMessage.includes("avstraliyanın yerləşdiyi qitə")) {
    botReply = "Avstraliya həm ölkə, həm də qitə olaraq Cənub Yarımkürəsində yerləşir.";
} else if (normalizedMessage.includes("ölkələrin əhali sayı")) {
    botReply = "Dünyanın ən çox əhalisi olan ölkəsi Çindir, ardınca Hindistan və ABŞ gəlir.";
}
else if (normalizedMessage.includes("çin haradadır") || normalizedMessage.includes("çinin paytaxtı nədir")) {
    botReply = "Çin Şərqi Asiyada yerləşir, paytaxtı Pekindir və əhali sayına görə dünyanın ən böyük ölkəsidir.";
} else if (normalizedMessage.includes("sakit okean")) {
    botReply = "Sakit Okean dünyanın ən böyük okeanıdır və Asiya, Avstraliya, Şimali və Cənubi Amerika qitələri arasında yerləşir.";
} else if (normalizedMessage.includes("afrika qitəsi")) {
    botReply = "Afrika, sahəsinə görə dünyanın ikinci ən böyük qitəsidir və 54 ölkədən ibarətdir.";
} else if (normalizedMessage.includes("karib dənizi")) {
    botReply = "Karib Dənizi, Karib adaları və Mərkəzi Amerikanın sahillərində yerləşən isti dənizdir. Turizm baxımından məşhurdur.";
} else if (normalizedMessage.includes("dəniz səviyyəsindən ən aşağıda yerləşən yer")) {
    botReply = "Dünyada dəniz səviyyəsindən ən aşağıda yerləşən yer, Ölü Dənizin sahilində yerləşir və bu yer təxminən -430 metr dərinlikdədir.";
} else if (normalizedMessage.includes("sibir haqqında")) {
    botReply = "Sibir Rusiya Federasiyasının Asiya hissəsində yerləşir və geniş meşəlik, buzlaq və tundra əraziləri ilə tanınır.";
} else if (normalizedMessage.includes("hind okeanı")) {
    botReply = "Hind Okeanı Hindistan, Avstraliya və Afrika qitələri arasında yerləşir və dünyanın üçüncü ən böyük okeanıdır.";
} else if (normalizedMessage.includes("and dağları")) {
    botReply = "And Dağları Cənubi Amerikada yerləşir və dünyanın ən uzun dağ silsiləsidir, təxminən 7,000 km uzunluğundadır.";
} else if (normalizedMessage.includes("məkkə haradadır")) {
    botReply = "Məkkə Səudiyyə Ərəbistanında yerləşir və İslam dininin ən müqəddəs şəhərlərindən biridir.";
} else if (normalizedMessage.includes("böyük kanion")) {
    botReply = "Böyük Kanion, ABŞ-ın Arizona ştatında yerləşir və Kolorado çayının eroziya yolu ilə yaranmış nəhəng kaniondur.";
} else if (normalizedMessage.includes("ətrafımızdakı planetlər")) {
    botReply = "Yerdən sonra ən yaxın planetlərimiz Venera və Marsdır. Günəş sistemimizdə Yupiter ən böyük planetdir.";
} else if (normalizedMessage.includes("avropanın ən böyük gölü")) {
    botReply = "Avropanın ən böyük gölü, Rusiya və Estoniya arasında yerləşən Ladoga gölüdür.";
} else if (normalizedMessage.includes("kür çayı")) {
    botReply = "Kür çayı Qafqazın ən böyük çayıdır, Türkiyədə başlayır və Azərbaycan ərazisindən keçərək Xəzər dənizinə tökülür.";
} else if (normalizedMessage.includes("böyük britaniya haradadır")) {
    botReply = "Böyük Britaniya Şimali Atlantik Okeanında yerləşən ada dövlətidir və İngiltərə, Şotlandiya, Uels və Şimali İrlandiyadan ibarətdir.";
} else if (normalizedMessage.includes("niagara şəlaləsi")) {
    botReply = "Niagara Şəlaləsi, ABŞ və Kanada sərhədində yerləşir və dünyanın ən güclü və məşhur şəlalələrindən biridir.";
}
else if (normalizedMessage.includes("hindistanın paytaxtı") || normalizedMessage.includes("hindistan haradadır")) {
    botReply = "Hindistan Cənubi Asiyada yerləşir, paytaxtı Yeni Dehlidir və əhalisi baxımından dünyanın ikinci ən böyük ölkəsidir.";
} else if (normalizedMessage.includes("amerika qitəsi")) {
    botReply = "Amerika qitəsi iki əsas hissədən ibarətdir: Şimali və Cənubi Amerika. Şimalda ABŞ və Kanada, cənubda isə Braziliya və Argentina kimi ölkələr yerləşir.";
} else if (normalizedMessage.includes("balqanas yarımadası")) {
    botReply = "Balkan yarımadası Cənub-Şərqi Avropada yerləşir və Yunanıstan, Bolqarıstan və Serbiya kimi ölkələri əhatə edir.";
} else if (normalizedMessage.includes("rusiyanın ən böyük şəhəri")) {
    botReply = "Rusiyanın ən böyük şəhəri Moskva şəhəridir və paytaxtıdır. Bu şəhər Rusiyanın siyasi və iqtisadi mərkəzidir.";
} else if (normalizedMessage.includes("sakit okeanda adalar")) {
    botReply = "Sakit Okeanda yüzlərlə ada yerləşir. Bu adalara Havai, Filippin, Fici və Yeni Zelandiya daxildir.";
} else if (normalizedMessage.includes("savana nədir")) {
    botReply = "Savana, əsasən Afrika və Cənubi Amerikada tapılan, quru və yağışlı mövsümlərə malik olan geniş otlaqlarla örtülü təbii sahədir.";
} else if (normalizedMessage.includes("alplar dağları")) {
    botReply = "Alplar Avropada yerləşən məşhur dağ silsiləsidir və İsveçrə, İtaliya və Fransa kimi ölkələri əhatə edir.";
} else if (normalizedMessage.includes("avstraliyanın səhrası")) {
    botReply = "Avstraliyanın ən böyük səhralarından biri Böyük Viktoriya Səhrasıdır və qitənin cənub-qərbində yerləşir.";
} else if (normalizedMessage.includes("süveyş kanalı")) {
    botReply = "Süveyş kanalı Misirdə yerləşir və Aralıq dənizi ilə Qırmızı dənizi birləşdirir, Avropa ilə Asiya arasındakı dəniz yolunu qısaldır.";
} else if (normalizedMessage.includes("anqara haradadır")) {
    botReply = "Ankara Türkiyənin paytaxtıdır və ölkənin mərkəzi hissəsində yerləşir.";
} else if (normalizedMessage.includes("niqer çayı")) {
    botReply = "Niger çayı Qərbi Afrikada yerləşir və Mali, Niger, Nigeriya kimi ölkələrdən axır.";
} else if (normalizedMessage.includes("venesuela və angel şəlaləsi")) {
    botReply = "Venesuelanın məşhur Angel Şəlaləsi dünyanın ən hündür şəlaləsidir və Canaima Milli Parkında yerləşir.";
} else if (normalizedMessage.includes("panama kanalı")) {
    botReply = "Panama kanalı Mərkəzi Amerikada, Panama ölkəsində yerləşir və Atlantik okeanı ilə Sakit okeanı birləşdirir.";
} else if (normalizedMessage.includes("dünyanın ən uzun çayı")) {
    botReply = "Dünyanın ən uzun çayı Nil çayıdır və Şimali Afrikada yerləşir, təxminən 6,650 km uzunluğa malikdir.";
} else if (normalizedMessage.includes("venesiya haradadır")) {
    botReply = "Venesiyə İtaliyada yerləşir və məşhur kanalları ilə tanınan, su üzərində inşa edilmiş şəhərdir.";
} else if (normalizedMessage.includes("meksikanın paytaxtı")) {
    botReply = "Meksikanın paytaxtı Mexiko şəhəridir və ölkənin mərkəzi hissəsində yerləşir.";
} else if (normalizedMessage.includes("pireney yarımadası")) {
    botReply = "Pireney yarımadası İberiya yarımadası kimi də tanınır və İspaniya və Portuqaliya ölkələrini əhatə edir.";
} else if (normalizedMessage.includes("viktoriya gölü")) {
    botReply = "Viktoriya gölü Afrika qitəsində yerləşir və Keniyadan Tanzaniyaya və Uqandaya qədər geniş ərazini əhatə edir.";
} else if (normalizedMessage.includes("xəzər dənizi haradadır")) {
    botReply = "Xəzər dənizi dünyanın ən böyük gölüdür və Azərbaycanın şərqində yerləşir, həmçinin İran, Rusiya, Qazaxıstan və Türkmənistanla sərhəd təşkil edir.";
} else if (normalizedMessage.includes("piramidalar haradadır")) {
    botReply = "Misirin məşhur piramidaları Qahirənin yaxınlığında yerləşir və ən məşhuru Giza piramidalarıdır.";
} else if (normalizedMessage.includes("özbəkistanın yerləşdiyi qitə")) {
    botReply = "Özbəkistan Mərkəzi Asiyada yerləşir və Qazaxıstan, Tacikistan, Qırğızıstan, Türkmənistan və Əfqanıstanla sərhəd təşkil edir.";
} else if (normalizedMessage.includes("italiyanın məşhur yerləri")) {
    botReply = "İtaliya Kolosseum, Pisa Qülləsi və Venesiya kanalları kimi məşhur yerləri ilə tanınır.";
}
else if (normalizedMessage.includes("atlantik okeanı")) {
    botReply = "Atlantik okeanı Amerika, Avropa və Afrika qitələrini əhatə edən dünyanın ikinci ən böyük okeanıdır.";
} else if (normalizedMessage.includes("himala dağları")) {
    botReply = "Himala dağları Asiyada yerləşir və dünyada ən yüksək zirvələri olan dağ silsiləsidir. Burada Everest zirvəsi də yerləşir.";
} else if (normalizedMessage.includes("arpaçay çayı")) {
    botReply = "Arpaçay çayı, Azərbaycan və Ermənistan arasında sərhəddən axır və Araz çayına tökülür.";
} else if (normalizedMessage.includes("tanzaniya və kilimancaro dağı")) {
    botReply = "Kilimancaro dağı Tanzaniyada yerləşir və Afrikanın ən hündür zirvəsidir.";
} else if (normalizedMessage.includes("kanada haradadır")) {
    botReply = "Kanada Şimali Amerikada yerləşir, ABŞ ilə şimal sərhədini paylaşır və ərazi baxımından dünyanın ikinci ən böyük ölkəsidir.";
} else if (normalizedMessage.includes("altay dağları")) {
    botReply = "Altay dağları Rusiya, Qazaxıstan, Monqolustan və Çinin sərhədlərində yerləşir və qədim sivilizasiyalar üçün əhəmiyyətli bir bölgədir.";
} else if (normalizedMessage.includes("yapon dənizi")) {
    botReply = "Yapon dənizi Asiya materiki ilə Yapon adaları arasında yerləşir və Yaponiyanın şərq sahillərini əhatə edir.";
} else if (normalizedMessage.includes("dəniz səviyyəsindən ən yüksəkdə yerləşən göl")) {
    botReply = "Dəniz səviyyəsindən ən yüksəkdə yerləşən göl Titikaka gölüdür və Peru ilə Boliviyanın sərhədindədir.";
} else if (normalizedMessage.includes("şimal qütbü")) {
    botReply = "Şimal Qütbü, Arktik okeanın ortasında yerləşir və bu ərazi çox soyuq və buzla örtülüdür.";
} else if (normalizedMessage.includes("vaşinqton dc haradadır")) {
    botReply = "Vaşinqton D.C. ABŞ-ın paytaxtıdır və ölkənin şərq sahilində, Potomak çayı üzərində yerləşir.";
} else if (normalizedMessage.includes("dünyanın ən böyük şəlaləsi")) {
    botReply = "Dünyanın ən böyük şəlaləsi, eni və su axınına görə, Cənubi Amerikada yerləşən İquasu Şəlaləsidir.";
} else if (normalizedMessage.includes("himalay dağlarının hündürlüyü")) {
    botReply = "Himalay dağları dünyanın ən yüksək zirvələrinə sahibdir və Everest zirvəsi təxminən 8,848 metr yüksəkliyindədir.";
} else if (normalizedMessage.includes("tundra bölgəsi")) {
    botReply = "Tundra, Şimali Amerika və Asiyanın arktik bölgələrində rastlanan, sərt iqlimi və xüsusi bitki örtüyü ilə seçilən bir bölgədir.";
} else if (normalizedMessage.includes("şimal yarımkürəsində ən böyük ada")) {
    botReply = "Şimal yarımkürəsində ən böyük ada Qrenlandiyadır və Danimarkaya aiddir.";
} else if (normalizedMessage.includes("venesiyanın kanalları")) {
    botReply = "Venesiyanın məşhur kanalları İtaliyada yerləşir və şəhərin küçələrinin su kanalları üzərində olduğu üçün 'su şəhəri' adlandırılır.";
} else if (normalizedMessage.includes("norveç fiyordları")) {
    botReply = "Norveç fiyordları, buzlaqların təsiri ilə formalaşmış uzun və dərin su keçidləri ilə məşhurdur.";
} else if (normalizedMessage.includes("xəzər dənizi barədə məlumat")) {
    botReply = "Xəzər dənizi dünyanın ən böyük qapalı gölüdür və həm Azərbaycan, həm də Rusiyanın sahillərini əhatə edir.";
} else if (normalizedMessage.includes("sibir") || normalizedMessage.includes("sibir donu")) {
    botReply = "Sibir Rusiyanın geniş ərazisində yerləşir və ekstremal soyuq qışları ilə tanınır. Sibir ərazisində dərin don təbəqəsi var.";
} else if (normalizedMessage.includes("amazon meşələri")) {
    botReply = "Amazon meşələri Cənubi Amerikada yerləşir və planetin ən böyük tropik yağış meşəsidir.";
} else if (normalizedMessage.includes("orta asiya ölkələri")) {
    botReply = "Orta Asiyada Qazaxıstan, Özbəkistan, Türkmənistan, Tacikistan və Qırğızıstan yerləşir.";
} else if (normalizedMessage.includes("malaziya adaları")) {
    botReply = "Malaziya, Cənub-Şərqi Asiyada yerləşir və 878 ada ilə Asiyanın ən geniş adalarına malik ölkələrdəndir.";
} else if (normalizedMessage.includes("portuqaliya və azor adaları")) {
    botReply = "Azor adaları Atlantik okeanında yerləşir və Portuqaliyaya aid 9 adadan ibarət qrupdur.";
} else if (normalizedMessage.includes("almaniyanın ən uzun çayı")) {
    botReply = "Almaniyanın ən uzun çayı Reyn çayıdır və bu çay həmçinin Avropanın önəmli çaylarındandır.";

}
// Əlavə coğrafi məlumatlar
else if (normalizedMessage.includes("gobi səhrası")) {
    botReply = "Gobi səhrası Çin və Monqolustan arasında yerləşir və soyuq səhralar arasında tanınır.";
} else if (normalizedMessage.includes("mariana çökəkliyi")) {
    botReply = "Mariana çökəkliyi Sakit okeanda yerləşir və dünyanın ən dərin nöqtəsidir, təxminən 11,000 metr dərinliyə malikdir.";
} else if (normalizedMessage.includes("antarktika qitəsi")) {
    botReply = "Antarktika dünyanın ən soyuq qitəsidir və cənub qütbü bu qitədə yerləşir. Burada daimi buzlaqlar vardır.";
} else if (normalizedMessage.includes("seyşel adaları")) {
    botReply = "Seyşel adaları Hind okeanında yerləşən tropik cənnət sayılır və turistlər üçün məşhur bir məkan sayılır.";
} else if (normalizedMessage.includes("italiyanın paytaxtı")) {
    botReply = "İtaliyanın paytaxtı Roma şəhəridir və Avropanın ən qədim və tarixi şəhərlərindən biridir.";
} else if (normalizedMessage.includes("tropik meşələr haradadır")) {
    botReply = "Tropik meşələr əsasən Cənubi Amerika, Afrika və Cənub-Şərqi Asiyada yerləşir və bura sıx yağış alan bölgələrdir.";
} else if (normalizedMessage.includes("islandiya haradadır")) {
    botReply = "Islandiya Atlantik okeanında yerləşən ada dövlətidir və aktiv vulkanları və buzlaqları ilə tanınır.";
} else if (normalizedMessage.includes("yeni zelandiya və avstraliya")) {
    botReply = "Yeni Zelandiya və Avstraliya Sakit okeanın cənubunda yerləşir. Yeni Zelandiya iki əsas ada, Avstraliya isə bir qitə adasıdır.";
} else if (normalizedMessage.includes("victoria şəlaləsi")) {
    botReply = "Victoria Şəlaləsi Zimbabve və Zambiya arasında yerləşir və dünyanın ən geniş şəlalələrindən biridir.";
} else if (normalizedMessage.includes("dünyanın ən böyük gölü")) {
    botReply = "Dünyanın ən böyük gölü Xəzər dənizidir. Bu göl həm şirin, həm də duzlu suya malikdir və Asiya ilə Avropanı birləşdirir.";
} else if (normalizedMessage.includes("amazon çayının mənbəyi")) {
    botReply = "Amazon çayı Peru And dağlarından başlayır və Braziliya boyunca axaraq Atlantik okeanına tökülür.";
} else if (normalizedMessage.includes("yaponiyanın paytaxtı")) {
    botReply = "Yaponiyanın paytaxtı Tokio şəhəridir və dünyanın ən sıx məskunlaşmış şəhərlərindən biridir.";
} else if (normalizedMessage.includes("karaib adaları")) {
    botReply = "Karaib adaları Karib dənizində yerləşir və bu adalar Baham adaları, Kuba, Yamayka və Haitini əhatə edir.";
} else if (normalizedMessage.includes("and çayı")) {
    botReply = "And çayı Şimali Amerikada yerləşir və Colorado çayı ilə qovuşaraq Böyük Kanionu meydana gətirir.";
} else if (normalizedMessage.includes("günəş sistemi haqqında")) {
    botReply = "Günəş sistemi Günəşin ətrafında fırlanan planetlər, asteroidlər və kometalardan ibarətdir. Günəş sistemi, Süd yolu qalaktikasının bir hissəsidir.";
} else if (normalizedMessage.includes("ilk iqlim zonaları")) {
    botReply = "Dünyada üç əsas iqlim zonası var: tropik, mülayim və qütb iqlim zonaları.";
} else if (normalizedMessage.includes("sinqapur haradadır")) {
    botReply = "Sinqapur Cənub-Şərqi Asiyada, Malayziya yarımadasının cənubunda yerləşir və ada dövlətidir.";
} else if (normalizedMessage.includes("boğazlar")) {
    botReply = "Boğazlar iki dənizi və ya su hövzəsini birləşdirən dar su yollarıdır. İstanbul boğazı, Dardanel boğazı və La-Manş boğazı məşhur nümunələrdir.";
} else if (normalizedMessage.includes("dağlıq qafqaz")) {
    botReply = "Dağlıq Qafqaz Böyük Qafqaz dağlarının cənub hissəsində yerləşir və Azərbaycan, Ermənistan və Gürcüstanı əhatə edir.";
} else if (normalizedMessage.includes("avropanın paytaxtları")) {
    botReply = "Avropada bir çox paytaxt var: London (İngiltərə), Paris (Fransa), Berlin (Almaniya), Madrid (İspaniya) və Roma (İtaliya) kimi.";
} else if (normalizedMessage.includes("baikal gölü")) {
    botReply = "Baikal gölü Rusiyada yerləşir və dünyanın ən dərin şirin su gölüdür. Təxminən 1,642 metr dərinliyə malikdir.";
} else if (normalizedMessage.includes("torf sahələri")) {
    botReply = "Torf sahələri bataqlıq ərazilərdə yerləşir və uzun müddət çürüməmiş üzvi maddələrdən ibarətdir. İrlandiya və Şotlandiyada geniş torf sahələri var.";
} else if (normalizedMessage.includes("roma imperiyası harada idi")) {
    botReply = "Roma İmperiyası Avropada İtaliyadan başlayaraq, Qərbi Asiya, Şimali Afrika və Britaniya adalarına qədər genişlənmişdi.";
} else if (normalizedMessage.includes("qızıl orda dövlətinin coğrafiyası")) {
    botReply = "Qızıl Orda dövləti Monqol İmperatorluğunun hissəsi kimi Avrasiya düzənliklərində, Qazaxıstan və Rusiyadan Qafqaz və Qara dənizə qədər əraziləri əhatə edirdi.";
} else if (normalizedMessage.includes("kolorado çayı")) {
    botReply = "Kolorado çayı ABŞ-ın qərbində yerləşir və Böyük Kanionu yaradan çay olaraq tanınır.";
} else if (normalizedMessage.includes("qrenlandiyanın ərazisi")) {
    botReply = "Qrenlandiya Danimarkaya məxsus muxtar bir ərazidir və dünya üzrə ən böyük ada kimi tanınır.";
} else if (normalizedMessage.includes("danimarkanın adaları")) {
    botReply = "Danimarka bir çox adaya sahibdir. Əsas adaları arasında Zelandiya, Funen və Bornholm var.";
}
// Əlavə coğrafi məlumatlar
else if (normalizedMessage.includes("finlandiya və gölləri")) {
    botReply = "Finlandiya 'Göllər Ölkəsi' olaraq tanınır və burada təxminən 188,000 göl var. Ən böyüklərindən biri Saimaa gölüdür.";
} else if (normalizedMessage.includes("böyük səhralar")) {
    botReply = "Dünyanın ən böyük səhraları arasında Sahara (Afrika), Gobi (Asiya), Kalahari (Afrika) və Arktik səhrası (Şimal Qütbü) var.";
} else if (normalizedMessage.includes("niqeriyanın paytaxtı")) {
    botReply = "Nigeriyanın paytaxtı Abucadır və ölkənin mərkəzində yerləşir.";
} else if (normalizedMessage.includes("kolumbiyanın dağları")) {
    botReply = "Kolumbiyada And dağları yerləşir və ölkənin qərb hissəsini əhatə edir.";
} else if (normalizedMessage.includes("meksikanın vulkanları")) {
    botReply = "Meksika çoxsaylı aktiv vulkanlara malikdir, bunlardan ən məşhuru Popocatepetl vulkanıdır.";
} else if (normalizedMessage.includes("pakistanın coğrafiyası")) {
    botReply = "Pakistan Asiyanın cənubunda yerləşir və Hindistan, Əfqanıstan və İranla sərhədlərə malikdir. Burada K2 zirvəsi də yerləşir.";
} else if (normalizedMessage.includes("mərakeş və atlas dağları")) {
    botReply = "Atlas dağları Mərakeşdə yerləşir və ölkənin qərbindən keçərək bir sıra milli parklara ev sahibliyi edir.";
} else if (normalizedMessage.includes("asiyanın ən böyük çayı")) {
    botReply = "Asiyanın ən böyük çayı Çin ərazisindəki Yangtze çayıdır və təxminən 6,300 km uzunluğundadır.";
} else if (normalizedMessage.includes("okean cərəyanları")) {
    botReply = "Dünyanın əsas okean cərəyanları arasında Qərb külək cərəyanı, Qolfstrim və Humboldt cərəyanı var.";
} else if (normalizedMessage.includes("etna vulkanı")) {
    botReply = "Etna vulkanı İtaliyanın Siciliya adasında yerləşir və Avropanın ən aktiv vulkanlarından biridir.";
} else if (normalizedMessage.includes("şri lanka haradadır")) {
    botReply = "Şri Lanka Hind okeanında, Hindistan yarımadasının cənub-şərqində yerləşən bir adadır.";
} else if (normalizedMessage.includes("bamako haradadır")) {
    botReply = "Bamako Mali Respublikasının paytaxtıdır və Niger çayının sahilində yerləşir.";
} else if (normalizedMessage.includes("çad gölü")) {
    botReply = "Çad gölü Mərkəzi Afrikada yerləşir və Çad, Niger, Nigeriya və Kamerun ölkələrinin sərhədində yerləşir.";
} else if (normalizedMessage.includes("roma və tibir çayı")) {
    botReply = "Roma şəhəri Tibir çayının sahilində yerləşir və bu çay İtaliyanın ən məşhur çaylarından biridir.";
} else if (normalizedMessage.includes("kərkük haradadır")) {
    botReply = "Kərkük İraqın şimalında yerləşən bir şəhərdir və neft ehtiyatları ilə məşhurdur.";
} else if (normalizedMessage.includes("keniyanın coğrafiyası")) {
    botReply = "Keniyanın qərb hissəsində Viktoriya gölü yerləşir və ölkənin şərqində Kilimancaro dağı yüksəlir.";
} else if (normalizedMessage.includes("asya qitəsinin ən hündür dağı")) {
    botReply = "Asiya qitəsinin ən hündür dağı Everestdir və bu zirvə Himalay dağlarında yerləşir.";
} else if (normalizedMessage.includes("iqlim dəyişiklikləri")) {
    botReply = "İqlim dəyişiklikləri, qlobal istiləşmə və karbon emissiyası kimi faktorlardan təsirlənərək dünyanın iqlim şəraitini dəyişdirir.";
} else if (normalizedMessage.includes("amazon çayının uzunluğu")) {
    botReply = "Amazon çayı dünyanın ən uzun və ya ikinci ən uzun çayı olaraq təxmin edilir, təxminən 6,400 km uzunluğundadır.";
} else if (normalizedMessage.includes("texas haradadır")) {
    botReply = "Texas ABŞ-ın cənub-qərbində yerləşən böyük bir əyalətdir və paytaxtı Ostindir.";
} else if (normalizedMessage.includes("niqer çayı haradadır")) {
    botReply = "Niger çayı Qərbi Afrikada yerləşir və Nigeriya, Mali və Niger ərazilərindən axır.";
} else if (normalizedMessage.includes("egey dənizi")) {
    botReply = "Egey dənizi Yunanıstan və Türkiyə arasında yerləşir və qədim Yunan sivilizasiyalarına ev sahibliyi etmişdir.";
} else if (normalizedMessage.includes("yukon çayı")) {
    botReply = "Yukon çayı Şimali Amerikada yerləşir və ABŞ-ın Alyaska əyalətindən başlayaraq Kanadanın Yukon bölgəsinə axır.";
} else if (normalizedMessage.includes("hind okeanının adaları")) {
    botReply = "Hind okeanında Maldiv adaları, Seyşel adaları və Madaqaskar kimi məşhur adalar yerləşir.";
} else if (normalizedMessage.includes("kolumbiyanın coğrafiyası")) {
    botReply = "Kolumbiya Cənubi Amerikanın şimal-qərbində yerləşir və həm Atlantik, həm də Sakit okean sahillərinə malikdir.";
} else if (normalizedMessage.includes("balear adaları")) {
    botReply = "Balear adaları İspaniyaya məxsusdur və Aralıq dənizində yerləşir. Burada İbiza, Mayorka və Menorka məşhur adalardır.";
} else if (normalizedMessage.includes("australiya səhrası")) {
    botReply = "Avstraliyada Böyük Səhralar sistemi var və bu, Böyük Viktoriya və Simpson səhraları daxil olmaqla geniş sahələri əhatə edir.";
} else if (normalizedMessage.includes("everest zirvəsinin yerləşdiyi ölkə")) {
    botReply = "Everest zirvəsi Nepal və Çin arasında, Himalay dağ silsiləsində yerləşir.";
} else if (normalizedMessage.includes("dünyanın ən böyük dağ silsiləsi")) {
    botReply = "Dünyanın ən böyük dağ silsiləsi And dağlarıdır və Cənubi Amerikanın qərb sahilindən keçərək təxminən 7,000 km uzunluqdadır.";
} else if (normalizedMessage.includes("bahama adaları haradadır")) {
    botReply = "Bahama adaları Karib dənizində yerləşir və ABŞ-ın cənub-şərqində, Atlantik okeanında yerləşir.";
} else if (normalizedMessage.includes("monqolustanın coğrafiyası")) {
    botReply = "Monqolustan Orta Asiyada yerləşir və Çinin şimalında, Rusiya ilə sərhəddə yerləşən geniş çöl və dağlıq ərazilərə malikdir.";
} else if (normalizedMessage.includes("qırmızı dəniz")) {
    botReply = "Qırmızı dəniz Afrika və Asiya arasında yerləşir və Süveyş kanalı vasitəsilə Aralıq dənizi ilə birləşir.";
} else if (normalizedMessage.includes("ceylan adası")) {
    botReply = "Ceylan adası, Şri Lanka olaraq da bilinir və Hindistanın cənub-şərqində yerləşir.";
} else if (normalizedMessage.includes("mərakeşin paytaxtı")) {
    botReply = "Mərakeşin paytaxtı Rabatdır, lakin ölkənin ən böyük və iqtisadi mərkəzi Kasablanka şəhəridir.";

}
// Daha çox coğrafi məlumatlar
else if (normalizedMessage.includes("azores adaları")) {
    botReply = "Azores adaları Atlantik okeanında yerləşir və Portuqaliyaya məxsus 9 adadan ibarət qrupdur.";
} else if (normalizedMessage.includes("afrikada ən böyük çöl")) {
    botReply = "Afrikada ən böyük çöl Sahara səhrasıdır və Şimali Afrikanı əhatə edir.";
} else if (normalizedMessage.includes("kaliforniya çölü")) {
    botReply = "Kaliforniya çölü ABŞ və Meksika sərhədində yerləşir və sərt iqlimi ilə tanınır.";
} else if (normalizedMessage.includes("rocky dağları")) {
    botReply = "Rocky Dağları Şimali Amerikanın qərbində, ABŞ və Kanadada yerləşən geniş dağ silsiləsidir.";
} else if (normalizedMessage.includes("honqkonq haradadır")) {
    botReply = "Honqkonq Cənubi Çində yerləşir və xüsusi idarəetmə bölgəsi olaraq Çinə aiddir.";
} else if (normalizedMessage.includes("missisipi çayı")) {
    botReply = "Missisipi çayı ABŞ-da yerləşir və Şimali Amerikanın ən uzun çaylarından biridir.";
} else if (normalizedMessage.includes("kanada və iqlimi")) {
    botReply = "Kanada çox müxtəlif iqlim şəraitinə malikdir. Şimalda soyuq arktik iqlim, cənubda isə mülayim iqlim var.";
} else if (normalizedMessage.includes("konqo çayı")) {
    botReply = "Konqo çayı Mərkəzi Afrikada yerləşir və dünyanın ən dərin çayı olaraq tanınır.";
} else if (normalizedMessage.includes("arabistan yarımadası")) {
    botReply = "Arabistan yarımadası Qərbi Asiyada yerləşir və burada Səudiyyə Ərəbistanı, BƏƏ, Oman və Yəmən kimi ölkələr var.";
} else if (normalizedMessage.includes("iranın paytaxtı")) {
    botReply = "İranın paytaxtı Tehran şəhəridir və ölkənin ən böyük şəhəridir.";
} else if (normalizedMessage.includes("himalay dağ silsiləsi")) {
    botReply = "Himalay dağ silsiləsi Asiyada yerləşir və burada Everest də daxil olmaqla dünyanın ən yüksək zirvələri var.";
} else if (normalizedMessage.includes("venesiya kanalları")) {
    botReply = "Venesiyanın kanalları şəhərin hər yerinə su yolları ilə getməyə imkan verir və bu şəhəri unikal edir.";
} else if (normalizedMessage.includes("qırmızı dənizdə yerləşən şəhərlər")) {
    botReply = "Qırmızı Dəniz sahillərindəki əsas şəhərlərdən biri Ciddədir, bu şəhər Səudiyyə Ərəbistanında yerləşir.";
} else if (normalizedMessage.includes("dəliqlər və mağaralar")) {
    botReply = "Dünyada fərqli dərinliklərə malik mağaralar var. Məsələn, Krubera mağarası dünyanın ən dərin mağaralarından biridir.";
} else if (normalizedMessage.includes("çili və and dağları")) {
    botReply = "Çili And dağları boyunca uzanır və burada Aconcagua kimi məşhur zirvələr var.";
} else if (normalizedMessage.includes("skandinaviya yarımadası")) {
    botReply = "Skandinaviya yarımadası Norveç, İsveç və Finlandiyanı əhatə edir və Şimali Avropada yerləşir.";
} else if (normalizedMessage.includes("banqladeş və bataqlıq ərazilər")) {
    botReply = "Banqladeşdə geniş bataqlıq ərazilər var, xüsusən də Sundarbans meşəsi dünyanın ən böyük mangrov bataqlığıdır.";
} else if (normalizedMessage.includes("madagaskar adası")) {
    botReply = "Madagaskar Afrikanın şərq sahillərində yerləşir və dünya üzrə ən müxtəlif bioloji növlərə malik adalardan biridir.";
} else if (normalizedMessage.includes("florida boğazı")) {
    botReply = "Florida boğazı Kuba və ABŞ-ın Florida ştatı arasında yerləşir və Atlantik okeanını Meksika körfəzi ilə birləşdirir.";
} else if (normalizedMessage.includes("uganda və viktoriya gölü")) {
    botReply = "Uganda Afrikanın şərqində yerləşir və Viktoriya gölünün sahillərindədir.";
} else if (normalizedMessage.includes("kolumbiya və çayları")) {
    botReply = "Kolumbiyada Magdalena və Cauca çayları ən böyük çaylardan hesab edilir.";
} else if (normalizedMessage.includes("mançester və ingiltərənin şimalı")) {
    botReply = "Mançester İngiltərənin şimalında yerləşir və sənaye mərkəzlərindən biridir.";
} else if (normalizedMessage.includes("tayland və çayları")) {
    botReply = "Taylandın ən böyük çayı Çao Phraya çayıdır və ölkənin mərkəzi boyunca axır.";
} else if (normalizedMessage.includes("günəş sistemində ən böyük planet")) {
    botReply = "Günəş sistemində ən böyük planet Yupiterdir və bu planetin güclü maqnit sahəsi var.";
} else if (normalizedMessage.includes("yeni qvineya adası")) {
    botReply = "Yeni Qvineya dünyanın ikinci ən böyük adasıdır və İndoneziya ilə Papua Yeni Qvineya arasında bölünmüşdür.";
} else if (normalizedMessage.includes("boğaz körfəzi")) {
    botReply = "Boğaz körfəzi Avstraliya sahillərində yerləşir və Papua Yeni Qvineya ilə Avstraliyanı bir-birindən ayırır.";
} else if (normalizedMessage.includes("peru və amazon meşələri")) {
    botReply = "Peru Amazon yağış meşələrinin bir hissəsinə malikdir və burada çoxsaylı bioloji növlər yaşayır.";
} else if (normalizedMessage.includes("saudi ərəbistanın səhraları")) {
    botReply = "Səudiyyə Ərəbistanı səhraların əhatəsindədir, ən böyük səhralarından biri Rub al-Khali səhrasıdır.";
} else if (normalizedMessage.includes("meksika körfəzi")) {
    botReply = "Meksika körfəzi ABŞ, Meksika və Kuba sahilləri ilə əhatələnir və neft ehtiyatları ilə tanınır.";
} else if (normalizedMessage.includes("hollandiyanın ərazisi və coğrafiyası")) {
    botReply = "Hollandiya aşağı ərazidə yerləşir və burada sahilləri qorumaq üçün çoxsaylı bəndlər və su kanalları tikilib.";
} else if (normalizedMessage.includes("yunanıstan və dənizlər")) {
    botReply = "Yunanıstan Aralıq dənizi, Egey dənizi və İoniya dənizi ilə əhatə olunmuşdur.";
} else if (normalizedMessage.includes("amazon meşələrindəki heyvanlar")) {
    botReply = "Amazon meşələrində jaguar, anakonda, və müxtəlif növ meymunlar kimi çoxsaylı heyvan növləri yaşayır.";
} else if (normalizedMessage.includes("portuqaliya və sahilləri")) {
    botReply = "Portuqaliya Atlantik okeanı sahilində yerləşir və ölkənin ən məşhur sahil zonalarından biri Algarvedir.";
} else if (normalizedMessage.includes("braziliya və çayları")) {
    botReply = "Braziliyanın ən böyük çayı Amazon çayıdır və dünyanın ən geniş su hövzələrindən biridir.";
} else if (normalizedMessage.includes("balıqların coğrafiyası")) {
    botReply = "Dünyada su hövzələrində müxtəlif iqlimlərdə və dərinliklərdə çoxsaylı balıq növləri var.";
} else if (normalizedMessage.includes("avstraliya və böyük baryer rifləri")) {
    botReply = "Böyük Baryer Rifi Avstraliyanın şimal-şərq sahillərində yerləşir və dünyanın ən böyük koral rifidir.";
} else if (normalizedMessage.includes("hind okeanında yerləşən adalar")) {
    botReply = "Hind okeanında Maldiv adaları, Seyşel adaları və Şri Lanka kimi məşhur adalar yerləşir.";
} else if (normalizedMessage.includes("xəzər dənizi və təbii ehtiyatlar")||rrnormalizedMessage.includes("xəzər dənizi və təbii ehtiyatlar haqqında danış")) {
    botReply = "Xəzər dənizi neft və qaz yataqları ilə zəngindir və sahilboyu ölkələr üçün strateji əhəmiyyət daşıyır.";
}
else if (normalizedMessage.includes("videoya like atsınlarmı")){
botReply = "Təbiki atsınlar"
}
else {
        botReply = "Bağışlayın, bu barədə cavabım yoxdur.";
    }
    

    // Bot cevabını ekle
    const botMessageElement = document.createElement("div");
    botMessageElement.className = "message bot-message";
    botMessageElement.textContent = botReply;
    chatBox.appendChild(botMessageElement);

    // Sesli yanıt ver
    speak(botReply);

    // Kullanıcı girişini temizle ve sohbet kutusunu aşağı kaydır
    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
document.getElementById("userInput").addEventListener("keydown", function(event) {
    // Əgər basılan düymə Enter-dirsə (13 = Enter düyməsi üçün kod)
    if (event.key === "Enter") {
        // `Enter` düyməsinə basıldığında `button.click()` funksiyasını çağırır
        document.getElementById("myButton").click();
    }
});



