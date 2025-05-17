import Image from "next/image";
import { History, User, Building, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function VaikunttaRamaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://www.srivaikunttasitarama.com/wp-content/uploads/2021/10/External-View-2-scaled.jpg"
          alt="Sri Vaikuntta Sita Rama Devalayammu"
          fill
          className="object-cover"
          priority
        />{" "}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Sri Vaikuntta Rama
          </h1>
          <p className="text-xl text-white/90">
            The Divine Appearance of Bhagwan Mahavishnu as Vaikuntta Rama
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            THE UNIQUE APPEARANCE OF VAIKUNTTA RAMA
          </h2>
          <p className="text-lg text-gray-700">
            Bhagwan MahaVishnu took a special Avatar of Lord Rama long after the
            end of Rama Avatar to appear again on Earth to fulfil his promise to
            Rishi Bhadra. This divine manifestation is known as Vaikuntta Rama.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            The history depicts that the need emerged for the incarnation of
            VAIKUNTTA Rama was to fulfil a long desire of his ardent devotee
            Bhadra. This unique form of Lord Rama is distinguished by having
            four hands, holding Shanku (conch) on the right, Chakra (discus) at
            his left, and Dhanurbhana (bow and arrow) in the other two hands,
            with Sita seated on his left lap and brother Laxmana standing at his
            left.
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="container mx-auto space-y-16">
        {/* Section 1: Maharshi Bhadra */}
        <section>
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <User className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Maharshi Bhadra
            </h2>
          </div>

          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-60 md:h-auto">
                <Image
                  src="https://lh3.googleusercontent.com/proxy/la3YzBJZud4V9fnybG7cDV2bGSmdeufro5Uzt6q7RtQTYGJ_8Ee2-GLEAPhfT_U1P1ZPTX4oy1nXohgcRvYawBzvUExx3xgvSPBBWNZ6h81G99CcPQ2T-vNqPWFS4uI-erG2ER2eePE"
                  alt="Maharshi Bhadra performing penance"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="md:w-2/3 p-6">
                <p className="text-gray-700 mb-4">
                  {`Bhadra performed penance at the bank of river Godavari in
                  "Dandakaranya" to receive the grace of Lord Rama. The exalted
                  Rishi implored Rama to be seated on his head, but Lord Rama,
                  who was in search of his consort Sita, gave promise to his
                  Bhakta that his desire would be fulfilled on his way back
                  after finding Sita and accomplishing the process of punishing
                  the wicked Ravana and establishing 'Dharma'.`}
                </p>
                <p className="text-gray-700">
                  {`However, Lord Rama did not fulfill his promise on his return
                  from Lanka to Ayodhya. Meanwhile, Rishi Bhadra continued his
                  penance, waiting for Lord Rama. After some time, when Bhagwan
                  MahaVishnu realized this, HE manifested himself as VAIKUNTTA
                  Rama and rushed to his devotee Bhadra, signaling his arrival
                  by blowing 'Shanku', accompanied by his consort Sita and
                  brother Laxmana, resembling that of 'Gajendra Moksham'.`}
                </p>
              </CardContent>
            </div>
          </Card>
        </section>

        {/* Section 2: Discovery of the Idols */}
        <section>
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <History className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Discovery of the Divine Idols
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              The idols of VAIKUNTTA Rama, Laxmana and Sita were found by Pokala
              Dhammakka, an ardent devotee of Lord Rama who lived in the 17th
              century. She was an inhabitant of Bhadrireddypalem, a mile away
              from the holy place of Bhadrachalam.
            </p>

            <p>
              {`On one fine night, she had darshan of Lord Rama in her dream who
              said, "The saints and sages are worshiping my embodied moorthy
              settled on Bhadragiri" and asked her to trace them, perform pooja
              and attain salvation. The very next morning, she started searching
              for the idols and peered into an ant-hill where she found the
              idols hidden.`}
            </p>

            <p>
              {`She poured hundreds of pots of Godavari water on the ant-hill,
              which tardily dissolved and gave way for the appearance of the
              hidden Deities. Since then, she used to perform pooja daily and
              offer 'naivedyam' with fruits fallen from a nearby palmyra tree.
              She also constructed a mandapam of thatch hut with the help of
              local villagers.`}
            </p>

            <p>
              Lord Rama told Dhammakka that at a later date, one of his devotees
              would construct a Mandir at this site. Dhammakka waited patiently
              for the devotee, who turned out to be Bhakta Ramadas.
            </p>
          </div>
        </section>

        {/* Section 3: Bhakta Ramadas */}
        <section>
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <Building className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Bhakta Ramadas and Temple Construction
            </h2>
          </div>

          <Card className="overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 relative h-auto">
                <Image
                  src="https://www.booksfact.com/images/history/2020/bhadrachala_ramadasu.jpg"
                  alt="Bhadrachalam Temple"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="md:w-2/3 p-6">
                <p className="text-gray-700 mb-4">
                  Bhadrachalarama temple was constructed by Kancharla Gopanna,
                  popularly known as Bhakta Ramadas, in the year 1674 A.D. Born
                  to Linganna Murthy and Kamamba in Nelakondapalli village, he
                  was the nephew of Akkanna, the administrative head in the
                  court of Nawab Abul Hussan Shah (Taneshah) of Golkonda.
                </p>

                <p className="text-gray-700 mb-4">
                 {`Appointed as Tahsildar of 'Palvoncha Paragana', Ramadas
                  discharged his official duties earnestly while continuing his
                  devotion to Lord Rama. Upon visiting Bhadrachalam during a
                  local festival, he was amazed by the divine idols and asked
                  villagers to contribute for a temple construction.`}
                </p>

                <p className="text-gray-700">
                 {`When contributions proved insufficient, Ramadas used 6 Lakhs
                  from the land revenues without the Nawab's permission to
                  complete the temple. As the temple neared completion, he faced
                  a problem fixing the 'Sudarshana Chakra' at the crest. In a
                  dream, Lord Rama guided him to find it in the Godavari river,
                  which he did the next morning.`}
                </p>
              </CardContent>
            </div>
          </Card>
        </section>

        {/* Section 4: The Divine Miracle */}
        <section>
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <Crown className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              The Divine Miracle and Nawab Tanishah
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
             {`After the temple's construction, Ramadas faced severe
              consequences. He was dismissed from service for misusing revenue
              funds and imprisoned for 12 long years in Golkonda Fort, where he
              endured much torture. Unable to withstand the miseries, Ramadas
              implored Rama to relieve him by singing many praising and
              emotional songs, which became popularized as 'Dasaradhi Sathakam'
              and 'Keertanas'.`}
            </p>

            <p>
             {`The divine miracle occurred when Lord Rama and Laxmana themselves
              appeared before Nawab Tanishah as Ramoji and Laxmoji, claiming to
              be servants of Bhakta Ramadas. They repaid the 6 lakh Mohurs to
              secure his release from imprisonment. They gave a voucher to
              Tanishah and placed it under Gopanna's pillow in jail.`}
            </p>

            <p>
             {`The next morning, Tanishah realized that those divine-looking
              persons were none other than Rama and Laxmana. He immediately
              arranged for Gopanna's release and begged forgiveness, placing all
              the Gold Mohurs at Gopanna's feet. Ramadas refused to take back
              the mohurs except for two, as a mark of divine significance. These
              two mohurs can still be seen at the Bhadrachala Sri Sita
              Ramachandra Swamy vaari Devasthanam.`}
            </p>

            <p>
              {`Influenced by the majesty of Lord Rama, Golkonda Ruler Tanishah
              earmarked an income of Rs 20,000 from Palwoncha paragana for the
              temple's maintenance. He also began the tradition of offering
              Pearls (Mutyala Talambralu) during the Kalyana Mahotsavam (Sri
              Rama Navami) ceremony, a practice that continues to this day with
              the state government sending pearls during the Sri Rama Navami
              Festival.`}
            </p>
          </div>
        </section>

        {/* Connection to Sri Vaikuntta Sitarama Devalayam */}
        <section className="bg-orange-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
            Our Connection to Vaikuntta Rama
          </h2>

          <p className="text-gray-700 mb-4">
            Due to our strong devotion and affiliation to Bhadrachalam SREE
            SEETHA RAMACHANDRA SWAMY VAARI DEVASTHANAM, we have taken the unique
            appearance of Lord Vishnu as VAIKUNTTA RAMA as the name for our
            Devalayammu in Shah Alam, Malaysia.
          </p>

          <p className="text-gray-700">
            The Sri Vaikuntta Sitarama Devalayam continues this sacred
            tradition, bringing the blessings of Vaikuntta Rama to the devotees
            in Malaysia, particularly the Telugu community who migrated here
            over 150 years ago.
          </p>
        </section>
      </div>
    </div>
  );
}
