export default [
  {
    title: "Crafting research communication in building history",
    subtitle: "An Interactive Research Output",
    authors: [
      {
        person: { firstname: "Jonathan", lastname: "Westin" },
        institution: {
          title: "Centre for Digital Humanities, University of Gothenburg"
        }
      },
      {
        person: { firstname: "Gunnar", lastname: "Almevik" },
        institution: {
          title: "Department of Conservation, University of Gothenburg"
        }
      }
    ],
    published_at: "2021-01-20",
    doi: "10.3791/59495",
    revision: 2,
    summary:
      'This research is presented through an interactive application. A virtual reconstruction based on the remains from a medieval stave church is used as a case study to re-establish the historic building as a tangible place and assemblage. Augmented by virtual reality, the research focuses on the sensuous aspects of the stave church as a whole - where architecture, artefacts, light, and materials interact - through the movements of approaching, entering, and dwelling. The research output is a virtual reconstruction, or a virtual diorama, that "remembers" the stave church elements and re-contextualises contemporaneous religious artefacts that have been dismembered and diffused in various exhibitions and deposits. The contribution in this research is methodological, seeking to test and provide a case to discuss how non-traditional research outcome can be crafted to elicit the sensuous aspects of research and still attend to the rigor of science. We seek to methodologise the digital artefact as a research output but also as a means for testing hypothesis and observing the effects when enacting the environment. The connection to the craft sciences concerns both the empirical material, the wooden stave church as a crafted object, and the exploration of an interactive application as a research output or hermeneutic device in the research process.',
    keywords: [
      { label: "Reconstruction" },
      { label: "Non-traditional Research Output" },
      { label: "Virtual Reality" }
    ],
    files: [
      {
        title: "Crafting research",
        type: "Mac application (zip archive)",
        size: 2300000000,
        filename: "mac.zip"
      },
      {
        title: "Crafting research",
        type: "Windows application (zip archive)",
        size: 2300000000,
        filename: "mac.zip"
      },
      {
        title: "Extended abstract",
        type: "PDF",
        size: 1300000,
        filename: "mac.zip"
      }
    ],
    content: [
      {
        label: "1",
        text:
          'The contribution in this research context is mainly methodological, in seeking to test and provide a case to discuss how non-traditional research outcomes can be crafted to elicit the sensuous aspects of research and still attend to the rigor of science. We seek to methodologise the digital artefact as a research output but also as a means for testing hypothesis and observing the effects when enacting the environment. The digital artifact is used as an "historical laboratory" (Almevik 2019). The connection to the craft sciences concerns both the empirical material, the wooden stave church as a crafted object, and the exploration of an interactive application as a research output or hermeneutic device in the research process. The methodology could be applied to any crafted artefact or spatial environment. We argue that the full use of technology and visual media is particularly important in research on embodied craft skills and sensory-based judgements to reduce the loss of information in translations between modes, medias, and formats.',
        media: [
          {
            _id: 1,
            mime: "image/jpeg",
            url:
              "https://antarctica.dh.gu.se/pubportal/images/article/image2.jpg"
          }
        ],
        caption:
          "Some technical info about: Data<br >Perhaps an instruction: Do something",
        rights: "Creative Commons 4.0"
      },
      {
        label: "2",
        text:
          "The primary source for the reconstruction is the archaeological remain of the stave church, safeguarded at the Swedish History museum (SHM 10 232:1-67). Guided by the remains, the ground plan can be determined to a rectangular nave of 7.85 x 5.30 meters and a chancel with a length of 3.40 meters. The height of the walls can be specified to 4.10 meters in the nave and 3.50 meters in the chancel. The remains do not inform us on all features of the building as a whole or its environment and furnishing, hence we have used other contemporaneous archeological data and remains for analogies. An important finding is the ground and imprint of a stave church inside the nearby Romanesque church in Silte, discovered in 1970. This finding provides credible information of the foundation, church floor, roof shape, and height of the same type as the one found in Hemse. Together, these two sources provide the foundational grounds for our digital reconstruction, but multiple other sources have been used to fill the gaps. Analogies to these sources have been selected by the critical criteria of relationship in space and time. The basis for our reconstruction and the use of multiple sources has been presented in previous research (Almevik, Pärmsten & Sjöholm 2020; Almevik & Westin 2020; 2017).",
        media: [
          {
            _id: 1,
            mime: "image/jpeg",
            url:
              "https://antarctica.dh.gu.se/pubportal/images/article/image4.jpg"
          }
        ],
        caption:
          "Some technical info about: Data<br >Perhaps an instruction: Do something",
        rights: "Creative Commons 4.0"
      },
      {
        label: "3",
        text:
          "All primary sources in the archeological find of Hemse stave church have been reinvestigated, documented, and processed into digital 3D representations through photogrammetric triangulation. With the photogrammetry software Agisoft Metashape, a three-dimensional structure of each element is computed from a large number of photos captured systematically (see de Rue et al. 2013). Using the 3D documentation as templates for a digital reconstruction, each individual part of the structure has been modelled separately, piece by piece, simulating a real construction process (Almevik & Westin 2017). Other sources included in the reconstruction have been assessed and represented through either photogrammetry or computed manually with the software Autodesk Maya 3D.",
        media: [
          {
            _id: 1,
            mime: "image/jpeg",
            url:
              "https://antarctica.dh.gu.se/pubportal/images/article/image3.jpg"
          }
        ],
        caption:
          "Some technical info about: Data<br >Perhaps an instruction: Do something",
        rights: "Creative Commons 4.0"
      },
      {
        label: "4",
        text:
          "To build our simulation of this space, and make it into a place, we assembled the model in Unity, a physics-based visualization and simulation engine that functions in the laboratory as an archive for heterogeneous digital material. Sound recordings, 3D models, photographs, and drawings can here be assembled in an interactive scene. While inherently interactive, the technology offers the opportunity to lead the audience through the different considerations taken in the research process, consider possible variants of constructive features and settings of artefacts, and compare their effect on the place. Existing in parallel space with the reconstructed structure, the documentation of the original stave church is incorporated as a reference layer, making it possible for the user to question and contest the reconstruction.",
        media: [
          {
            _id: 1,
            mime: "image/jpeg",
            url:
              "https://antarctica.dh.gu.se/pubportal/images/article/image7.jpg"
          }
        ],
        caption:
          "Some technical info about: Data<br >Perhaps an instruction: Do something",
        rights: "Creative Commons 4.0"
      },
      {
        label: "5",
        text:
          'The research output, the interactive narrated Virtual Reality application, consists of four chapters, each one with an interactive scene. The application consist of four chapters: (1) An introduction to the research questions, (2) a presentation of the archive material where the primary sources and analogies are accessed as 3D representations, (3) an "anastolysis" of the remains that contextualises the sources and present the key interpretations to the reconstruction, (4) and finally a simulation of the stave church where the user can roam the reconstructed building and its nearby environment with photorealistic textures, light and shadow, in the various soundscapes and assemblages and settings of corroborating elements. The linearity and meta-narrative of the research is provided by short films as introduction to each interactive scene. By a navigation tool, accessed by looking at the feet, the user may wander back and forth to revisit and interrogate the features in the different chapters. Through focus points the user can access research references and information of the sources and its interpretation.',
        media: [
          {
            _id: 1,
            mime: "image/jpeg",
            url:
              "https://antarctica.dh.gu.se/pubportal/images/article/image2.jpg"
          },
          {
            _id: 2,
            mime: "image/jpeg",
            url:
              "https://antarctica.dh.gu.se/pubportal/images/article/image3.jpg"
          }
          // "https://antarctica.dh.gu.se/pubportal/images/article/image4.jpg",
          // "https://antarctica.dh.gu.se/pubportal/images/article/image8.jpg",
          // "https://antarctica.dh.gu.se/pubportal/images/article/image6.jpg"
        ],
        caption:
          "Some technical info about: Data<br >Perhaps an instruction: Do something",
        rights: "Creative Commons 4.0"
      }
    ],
    references: [
      {
        _id: 1,
        text:
          "Almevik, G. Meta Almevik, G. & Westin, J. (2020). Entering Hemse. Enacting the Assemblage of a 12th-Century Gotlandic Stave Church. Agency, Micro-history & Built Environment. Ed. G. Tagesson, P. Cornell, M. Gardiner, L. Tomas & K. Weikert. Buildings in Society International. Oxford: Archaeopress: 13-28."
      },
      {
        _id: 2,
        text:
          "Almevik, G., Sjöholm, M. & Pärmsten, B. (2020). Mellan Hemse och Mästermyr. META 2020:1, 31-54."
      },
      {
        _id: 3,
        text:
          "Almevik, G. (2019). Historiskt laboratorium. Digitala modeller och rekonstruktioner av medeltida kyrkorum. Kungliga Vitterhetsakademiens årsbok 2019. Stockholm; Kungl. Vitterhetsakademien, 139-156."
      },
      {
        _id: 4,
        text:
          "Almevik, G. (2017). Perusing space-time in medieval sacred architecture: Paths, bundles, and constraints in Endre church during a fifteenth-century mass. Geografiska Annaler. Series B. Human Geography 99/3: 360-379"
      },
      {
        _id: 5,
        text:
          "Almevik, G. & J. Westin (2017). Hemse stave church revisited. Lund Archaeological Review 23: 7-26"
      },
      {
        _id: 6,
        text:
          "Bailey, J.O., J.N. Bailenson and D. Casasanto (2016). When does virtual embodiment change our minds? Presence: Teleoperators and Virtual Environments 25(2): 222-233"
      },
      {
        _id: 7,
        text:
          "Barsalou, L.W. 2010. Grounded cognition: Past, present, and future. Topics of Cognitive Science 2(4): 716-724"
      },
      {
        _id: 8,
        text:
          "Gibson, J. (2015/1979). The Ecological Approach to Visual Perception. New York: Psychology Press"
      },
      {
        _id: 9,
        text:
          "Gumbrecht, H. U. (2004). Production of Presence: What Meaning Cannot Convey. Stanford, CA: Stanford University Press"
      },
      {
        _id: 10,
        text:
          "Harris, O.J.T. & C.N. Cipolla (2017). Archaeological Theory in the New Millennium: Introducing Current Perspectives. London: Routledge"
      },
      {
        _id: 11,
        text:
          "Hägerstrand, T. (2009). Tillvaroväven. Stockholm: Forskningsrådet Formas"
      },
      {
        _id: 12,
        text:
          "Ingold, T. 2002. The perception of the environment. Essays on livelihood, dwelling and skill. London: Rothledge"
      },
      {
        _id: 13,
        text:
          "Kolb, D. (2006). Real Places in Virtual Spaces. Nordic Journal of Architectural research 19(3): 69-77"
      },
      {
        _id: 14,
        text:
          "Kus, S., (1992). Towards an archaeology of body and soul, in J.-C. Gardin and C. Peebles (eds) Representations in Archaeology: 168-77. Bloomington: Indiana University Press"
      },
      {
        _id: 15,
        text:
          "Landzelius, M. 1999. Dis[re]membering Spaces: Swedish Modernism in Law Courts Controversy. Diss. Department of Conservation, Gothenburg: Univ"
      },
      {
        _id: 16,
        text:
          "De Rue, J., G. Plets, G. Verhoeven, P. De Smedt, M. Bats, B. Cherretté, W. De Maeyer, J. Deconynck, D. Herremans, P. Laloo, M. Van Meirvenne and W. De Clercq 2013. Towards a three-dimensional cost-effective registration of the archaeological heritage. Journal of Archaeological Science 40(2): 1108-1121"
      },
      {
        _id: 17,
        text:
          "Ryle, G. 1945-1946. Knowing how and knowing that. Proceedings of the Aristotelian Society 46: 1-16. Tarlow, S. (2000). Emotion in archaeology. Current Anthropology 41(5): 713-46 Varela, F., E. Thompson & E. Rosch (1992). The Embodied Mind: Cognitive Science and Human Experience. Cambridge (MA): MIT Press"
      },
      {
        _id: 18,
        text:
          "Westin, J. & G. Almevik (2017). A virtual diorama: Mapping archives in situ at places of cultural significance. Nordisk Museologi 2: 22-36"
      },
      {
        _id: 19,
        text:
          "Westin, J. (2014). Inking a past: Visualization as a shedding of uncertainty. Visual Anthropology Review: 139-150"
      },
      {
        _id: 20,
        text:
          "Zopf, R., V. Polito & J. Moore (2017). Revisiting the link between body and agency: Visual movement congruency enhances intentional binding but is not body-specific. Scientific Reports: 1-9."
      }
    ],
    extras: [
      {
        label: "Standing buildings",
        items: [
          "Garde church, Gotland: Roof ridge",
          "Hemse church, Gotland: Funt",
          "Vänge church, Gotland: Funt and Sacristy door with forged fittings",
          "Väte church, Gotland: Church door with forged fittings",
          "Öja church, Gotland: Church wall"
        ]
      },
      {
        label: "Archives",
        item:
          "Heritage Visualisation Lab, University of Gothenburg (HVL) - Unity project Hemse 22, 2018.06.29."
      }
    ]
  },
  {
    title:
      "Three Observations on filming Tactility and Movement in Crafts-based Practice",
    authors: [
      {
        person: {
          firstname: "Wuon-Gean",
          lastName: "Ho"
        },
        institution: {
          title:
            "Centre for Fine Print Research (CFPR), University of West of England, Bristol. UK"
        }
      }
    ],
    published_at: "2021-01-20",
    doi: "10.3791/59496",
    revision: 2,
    summary:
      "Wuon-Gean Ho studied the craft of traditional woodblock printmaking in Japan. This film makes three observations on the filming of tactility and movement in the planning, carving and printing of a woodblock print, capturing her actions and movements at macroscopic level. The first is with alteration of the timebase of the film: either slowing down or speeding up the footage. With the alteration in time, there is a requirement to manipulate sound, and the film demonstrates how this is done to achieve an intuitively correct though constructed soundscape, giving an illusion of being able to deconstruct action. Secondly, the film explores the effect of mirror-touch-synaesthesia with close macro shots and intimate angles. The viewer is able to focus closely on the exact pressure of fingers on wood, the handling of tools and brushes and paper and embody some of the movement in their own understanding. Finally, the use of a birds' eye point of view, with the hands of the artist in the same anatomical position as the viewers' hands, enables the gaze of the viewer to mimic that of the maker, conveying haptic knowledge through poetic means.",
    keywords: [
      { label: "Mokuhanga" },
      { label: "Film" },
      { label: "Tactile" },
      { label: "Haptic" },
      { label: "Tacit" },
      { label: "Woodblock" },
      { label: "Woodcut" }
    ],
    content: [
      {
        label: "1",
        text:
          "I'm going to talk to you today about my research question, which is how can film language be harnessed to create a more immersive sensory expression of tactility and movement? I will focus my research on traditional water-based woodblock printmaking which I studied in Japan 20 years ago. I explored this question in [the following] three ways.",
        media: [
          {
            _id: 1,
            mime: "video/mp4",
            url:
              "https://antarctica.dh.gu.se/pubportal/videos/threeobservations1.mp4"
          }
        ],
        caption:
          "Some technical info about: Data<br >Perhaps an instruction: Do something",
        rights: "Creative Commons 4.0"
      },
      {
        label: "2",
        text:
          "<p>The first way is in altering the time-base of the film. Part A is with slowing movement. Using a slow-motion capture, I then extended the duration of the clip four times to deconstruct the movement, to reveal the intimate, unconscious details of gesture. The problem with stretching movement is that sound is also stretched too. Here you can see the same movement filmed twice: Once in real time with a macro lens and once with slow motion from the ide. I wanted the sound to be extended, but not deepened, so I experimented with cutting the sound into slices and creating an artificial wave that parallels the movement. Even though it is created with software in an artificial construct, it feels intuitively correct.</p><p>Part B is with speeding of movement. When I sped the movement up five times, repetitive gestures appear to trace interesting arcs. You can see the intention of the body and flow of direction. In order to roughly appreciate what is happening, I experimented with real time sounds placed near the action, to give the illusion of smooth movement and believable handling of materials.</p>",
        media: [
          {
            _id: 1,
            mime: "video/mp4",
            url:
              "https://antarctica.dh.gu.se/pubportal/videos/threeobservations2.mp4"
          }
        ],
        caption:
          "Some technical info about: Data<br >Perhaps an instruction: Do something",
        rights: "Creative Commons 4.0"
      }
      // {
      //   label: "3",
      //   text:
      //     "Secondly, I explore harnessing the illusion of mirror-touch synaesthesia. Watching movement triggers unconscious activation in corresponding areas in the brain to the gesture being performed, thus, I chose a camera angle in a direct focus close up of the body, as if the body were reflecting you, as the viewer. Here, the fingers rest on the table, hold tools, draw and carve wood, and you might be able to imagine doing these actions yourself. I aim to have you feel the shift of your weight as you carefully guide a sharp blade through wood, or imagine the sensation of dropping and releasing a colour pencil, what it feels like to pick up an alternative colour. The clatter of the pencil hitting the table is another clue to the movement of your body. And when you touch paper, look how your touch is light, like a dancer on tiptoe, poised at the edge of the stage.",
      //   media: {
      //     type: "video",
      //     url:
      //       "https://antarctica.dh.gu.se/pubportal/videos/threeobservations3.mp4",
      //     caption:
      //       "Some technical info about: Data<br >Perhaps an instruction: Do something",
      //     rights: "Creative Commons 4.0"
      //   }
      // },
      // {
      //   label: "4",
      //   text:
      //     "Finally, the bird's eye view, with the hands coming out the bottom of the frame, places the viewer in the artist's body. These hands are my hands, these gestures are my gestures, they may translate well to immersive worlds, because objectivity is reduced. We are left staring at the fixed plane of the action, and can suspend our disbelief, and appreciate other things instead. The textures and detail of the woodgrain, the interface of skin and tool, the sensations of liquid and glue, and maybe even start to appreciate the pressure and range of movements. The bird's eye view gives the viewer a sense of embodiment. contest the reconstruction.",
      //   media: {
      //     type: "video",
      //     url:
      //       "https://antarctica.dh.gu.se/pubportal/videos/threeobservations4.mp4",
      //     caption:
      //       "Some technical info about: Data<br >Perhaps an instruction: Do something",
      //     rights: "Creative Commons 4.0"
      //   }
      // },
      // {
      //   label: "5",
      //   text:
      //     "The whole filming process took place over two long days and was exhausting: checking the focus on two cameras, dancing between the tripods, ensuring I was in frame, and working around the machines. With the machines’ gaze on my unconscious action, I became self-aware, and found myself performing, rather than actually doing. It was a relief in the end to place the cameras in a more modest, spectator role, as if a friend had entered a room, and allow them to be less invasive protagonists. At the end of the day, the use of a camera allows me to invite you into my space, to watch the creation of a piece of work from start to finish. Thank you to the University of West of England, Bristol, and the Centre for Fine Print Research.",
      //   media: {
      //     type: "video",
      //     url:
      //       "https://antarctica.dh.gu.se/pubportal/videos/threeobservations5.mp4",
      //     caption:
      //       "Some technical info about: Data<br >Perhaps an instruction: Do something",
      //     rights: "Creative Commons 4.0"
      //   }
      // }
    ],
    references: [
      {
        _id: 1,
        text:
          "Anwar, M.N., Tomi, N. and Ito, K. (2011) Motor imagery facilitates force field learning. Brain Research. 1395 pp. 21-29. doi:10.1016/j.brainres.2011.04.030"
      },
      {
        _id: 2,
        text:
          "Batcho, C.S., Gagné, M., Bouyer, L.J., Roy, J.S. and Mercier, C. (2016) Impact of online visual feedback on motor acquisition and retention when learning to reach in a force field. Neuroscience. 337 pp. 267-275. doi:10.1016/j.neuroscience.2016.09.020"
      },
      {
        _id: 3,
        text:
          "Cardini, F., Tajadura-Jiménez, A., Serino, A. and Tsakiris, M. (2013) It feels like it’s me: interpersonal multisensory stimulation enhances visual remapping of touch from other to self. Journal of Experimental Psychology. Human Perception and Performance. 39 (3), pp. 630-637. doi:10.1037/a0031049"
      },
      {
        _id: 4,
        text:
          "Heath, M., Westwood, D.A. and Binsted, G. (2004) The control of memory-guided reaching movements in peripersonal space. Motor Control. 8 (1), pp. 76-106. doi:10.1123/mcj.8.1.76"
      },
      {
        _id: 5,
        text:
          "Jeanne, F., Thouvenin, I. and Lenglet, A. (2017) A study on improving performance in gesture training through visual guidance based on learners’ errors. In: Proceedings of the 23rd ACM Symposium on Virtual Reality Software and Technology [online]. 8 November 2017 Gothenburg Sweden: ACM. pp. 1-10"
      },
      {
        _id: 6,
        text:
          "Jin, S., Liu, H., Wang, B. and Sun, F. (2019) Open-Environment Robotic Acoustic Perception for Object Recognition. Frontiers in Neurorobotics [online]. 13 "
      },
      {
        _id: 7,
        text:
          "John, S. and Renumol, V.G. (2018) Impact of Fine Motor Skill Development App on Handwriting Performance in Children with Dysgraphia: A Pilot Study. In: Proceedings of the 2nd International Conference on Digital Technology in Education ICDTE 2018 [online]. 10 October 2018 Bangkok, Thailand: Association for Computing Machinery. pp. 11-16. Available from: http://doi.org/10.1145/3284497.3284502doi:10.1145/3284497.3284502 [Accessed 23 June 2020]"
      },
      {
        _id: 8,
        text:
          "Legatt, A.D. (2014) Evoked Potentials. In: Michael J. Aminoff and Robert B. Daroff (eds.). Encyclopedia of the Neurological Sciences (Second Edition) [online]. Oxford: Academic Press. pp. 228-231"
      },
      {
        _id: 9,
        text:
          "Moore, L.J., Vine, S.J., Smith, A.N., Smith, S.J. and Wilson, M.R. (2014) Quiet Eye Training Improves Small Arms Maritime Marksmanship. Military Psychology. 26 (5-6), pp. 355-365. doi:10.1037/mil0000039"
      },
      {
        _id: 10,
        text:
          "Parr, J.V.V., Vine, S.J., Wilson, M.R., Harrison, N.R. and Wood, G. (2019) Visual attention, EEG alpha power and T7-Fz connectivity are implicated in prosthetic hand control and can be optimized through gaze training. Journal of NeuroEngineering and Rehabilitation. 16 (1), pp. 1-20. doi:10.1186/s12984-019-0524-x"
      },
      {
        _id: 11,
        text:
          "Prunty, M. and Barnett, A.L. (2017) Understanding handwriting difficulties: A comparison of children with and without motor impairment. Cognitive Neuropsychology. 34 (3-4), pp. 205-218. doi:10.1080/02643294.2017.1376630"
      },
      {
        _id: 12,
        text:
          "Radziun, D. and Ehrsson, H.H. (2018) Auditory cues influence the rubber-hand illusion. Journal of Experimental Psychology. Human Perception and Performance. 44 (7), pp. 1012-1021. doi:10.1037/xhp0000508"
      },
      {
        _id: 13,
        text:
          "Serino, A., Pizzoferrato, F. and Làdavas, E. (2008) Viewing a face (especially one’s own face) being touched enhances tactile perception on the face. Psychological Science. 19 (5), pp. 434-438. doi:10.1111/j.1467-9280.2008.02105.x"
      }
    ]
  }
];
