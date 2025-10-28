"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { History, User, Building, Crown, Sparkles } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function VaikunttaRamaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="https://www.srivaikunttasitarama.com/wp-content/uploads/2021/10/External-View-2-scaled.jpg"
          alt="Sri Vaikuntta Sita Rama Devalayammu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl px-6 pb-20 w-full">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-3xl space-y-4"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-accent/10 backdrop-blur-sm px-4 py-1.5 border border-accent/20">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-white">Divine History</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Sri Vaikuntta Rama
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-white/90 leading-relaxed">
                The Divine Appearance of Bhagwan Mahavishnu as Vaikuntta Rama
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center space-y-6"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-accent">
              The Unique Appearance of Vaikuntta Rama
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              Bhagwan MahaVishnu took a special Avatar of Lord Rama long after the end of Rama Avatar to appear again on Earth to fulfil his promise to Rishi Bhadra. This divine manifestation is known as Vaikuntta Rama.
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed">
              This unique form of Lord Rama is distinguished by having four hands, holding Shanku (conch) on the right, Chakra (discus) at his left, and Dhanurbhana (bow and arrow) in the other two hands, with Sita seated on his left lap and brother Laxmana standing at his left.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="mx-auto max-w-6xl space-y-24">
          {/* Maharshi Bhadra */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <User className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Maharshi Bhadra</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="relative h-64 md:h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/proxy/la3YzBJZud4V9fnybG7cDV2bGSmdeufro5Uzt6q7RtQTYGJ_8Ee2-GLEAPhfT_U1P1ZPTX4oy1nXohgcRvYawBzvUExx3xgvSPBBWNZ6h81G99CcPQ2T-vNqPWFS4uI-erG2ER2eePE"
                  alt="Maharshi Bhadra performing penance"
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-4 p-6 rounded-2xl bg-background">
                <p className="text-muted-foreground leading-relaxed">
                  Bhadra performed penance at the bank of river Godavari in &quot;Dandakaranya&quot; to receive the grace of Lord Rama. The exalted Rishi implored Rama to be seated on his head, but Lord Rama, who was in search of his consort Sita, gave promise to his Bhakta that his desire would be fulfilled on his way back after finding Sita and accomplishing the process of punishing the wicked Ravana and establishing Dharma.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  However, Lord Rama did not fulfill his promise on his return from Lanka to Ayodhya. Meanwhile, Rishi Bhadra continued his penance, waiting for Lord Rama. After some time, when Bhagwan MahaVishnu realized this, HE manifested himself as VAIKUNTTA Rama and rushed to his devotee Bhadra, signaling his arrival by blowing Shanku, accompanied by his consort Sita and brother Laxmana, resembling that of Gajendra Moksham.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Discovery of Idols */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <History className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Discovery of the Divine Idols</h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-background space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The idols of VAIKUNTTA Rama, Laxmana and Sita were found by Pokala Dhammakka, an ardent devotee of Lord Rama who lived in the 17th century. She was an inhabitant of Bhadrireddypalem, a mile away from the holy place of Bhadrachalam.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                On one fine night, she had darshan of Lord Rama in her dream who said, &quot;The saints and sages are worshiping my embodied moorthy settled on Bhadragiri&quot; and asked her to trace them, perform pooja and attain salvation. The very next morning, she started searching for the idols and peered into an ant-hill where she found the idols hidden.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                She poured hundreds of pots of Godavari water on the ant-hill, which tardily dissolved and gave way for the appearance of the hidden Deities. Since then, she used to perform pooja daily and offer naivedyam with fruits fallen from a nearby palmyra tree. She also constructed a mandapam of thatch hut with the help of local villagers.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Lord Rama told Dhammakka that at a later date, one of his devotees would construct a Mandir at this site. Dhammakka waited patiently for the devotee, who turned out to be Bhakta Ramadas.
              </p>
            </motion.div>
          </motion.div>

          {/* Bhakta Ramadas */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <Building className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Bhakta Ramadas and Temple Construction</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="space-y-4 p-6 rounded-2xl bg-background order-2 md:order-1">
                <p className="text-muted-foreground leading-relaxed">
                  Bhadrachalarama temple was constructed by Kancharla Gopanna, popularly known as Bhakta Ramadas, in the year 1674 A.D. Born to Linganna Murthy and Kamamba in Nelakondapalli village, he was the nephew of Akkanna, the administrative head in the court of Nawab Abul Hussan Shah (Taneshah) of Golkonda.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Appointed as Tahsildar of Palvoncha Paragana, Ramadas discharged his official duties earnestly while continuing his devotion to Lord Rama. Upon visiting Bhadrachalam during a local festival, he was amazed by the divine idols and asked villagers to contribute for a temple construction.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  When contributions proved insufficient, Ramadas used 6 Lakhs from the land revenues without the Nawab&apos;s permission to complete the temple. As the temple neared completion, he faced a problem fixing the Sudarshana Chakra at the crest. In a dream, Lord Rama guided him to find it in the Godavari river, which he did the next morning.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="relative h-64 md:h-full rounded-2xl overflow-hidden order-1 md:order-2">
                <Image
                  src="https://www.booksfact.com/images/history/2020/bhadrachala_ramadasu.jpg"
                  alt="Bhadrachalam Temple"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Divine Miracle */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <Crown className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">The Divine Miracle and Nawab Tanishah</h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-background space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                After the temple&apos;s construction, Ramadas faced severe consequences. He was dismissed from service for misusing revenue funds and imprisoned for 12 long years in Golkonda Fort, where he endured much torture. Unable to withstand the miseries, Ramadas implored Rama to relieve him by singing many praising and emotional songs, which became popularized as Dasaradhi Sathakam and Keertanas.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The divine miracle occurred when Lord Rama and Laxmana themselves appeared before Nawab Tanishah as Ramoji and Laxmoji, claiming to be servants of Bhakta Ramadas. They repaid the 6 lakh Mohurs to secure his release from imprisonment. They gave a voucher to Tanishah and placed it under Gopanna&apos;s pillow in jail.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The next morning, Tanishah realized that those divine-looking persons were none other than Rama and Laxmana. He immediately arranged for Gopanna&apos;s release and begged forgiveness, placing all the Gold Mohurs at Gopanna&apos;s feet. Ramadas refused to take back the mohurs except for two, as a mark of divine significance. These two mohurs can still be seen at the Bhadrachala Sri Sita Ramachandra Swamy vaari Devasthanam.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Influenced by the majesty of Lord Rama, Golkonda Ruler Tanishah earmarked an income of Rs 20,000 from Palwoncha paragana for the temple&apos;s maintenance. He also began the tradition of offering Pearls (Mutyala Talambralu) during the Kalyana Mahotsavam (Sri Rama Navami) ceremony, a practice that continues to this day with the state government sending pearls during the Sri Rama Navami Festival.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Connection Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center p-12 rounded-2xl bg-accent/5 border border-accent/20 space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-accent">
              Our Connection to Vaikuntta Rama
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Due to our strong devotion and affiliation to Bhadrachalam SREE SEETHA RAMACHANDRA SWAMY VAARI DEVASTHANAM, we have taken the unique appearance of Lord Vishnu as VAIKUNTTA RAMA as the name for our Devalayammu in Shah Alam, Malaysia.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The Sri Vaikuntta Sitarama Devalayam continues this sacred tradition, bringing the blessings of Vaikuntta Rama to the devotees in Malaysia, particularly the Telugu community who migrated here over 150 years ago.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
