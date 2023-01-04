const resources_folder = "../resources/theses_etc/"
var data = [
    {
        "category": "talks",
        "title": {"en": "A manifestly gauge-invariant treatment of the Minimal Supersymmetric Standard Model", "de": "Eine manifest eichinvariante Beschreibung des Minimal Supersymmetrischen Standardmodells"},
        "description": {"en": "[ÖPG2022, Annual Meeting of the Austrian Physical Society in Leoben] I discuss the issue of gauge-invariance in gauge theories like the Standard Model. A possible solution is so-called Augmented Perturbation Theory which provides an inherently gauge-invariant description by shifting the view away from elementary degrees of freedom towards a composite operator language. By means of the FMS-mechanism, this operator description is brought into contact with known results from Perturbation Theory (PT) and Lattice Field Theory. Finally, I apply this formalism to the Minimal Supersymmetric Standard Model and investigate the relation between said operator description and conventional results from PT.", "de": "[ÖPG2022, Annual Meeting of the Austrian Physical Society in Leoben] Ich diskutiere ein grundlegendes Problem bei der Beschreibung von Eichtheorien wie dem Standardmodell: Eichinvarianz. Eine mögliche Lösung dafür ist Augmented Perturbation Theory, die den Fokus weg von den elementaren Freiheitsgraden einer Theorie und hin zu einer Operatorsprache lenkt. Mithilfe des FMS-Mechanismus kann diese Beschreibung mit bekannten Resultaten der Störungstheorie und Gitterfeldtheorie verglichen werden. Anschließend wende ich besagten Formalismus auf das Minimal Supersymmetrische Standardmodell an und zeige die Beziehung dieser Operatorsprache mit herkömmlichen Resultaten auf."},
        "date": {"en": "September 28, 2022", "de": "28. September 2022"},
        "source": [{"tag": "ÖPG2022", "link": "https://oepg2022.unileoben.ac.at"},{"tag": "slides", "link": `${resources_folder}2022_09_28_OEPG.pdf`}]
    },
    {
        "category": "theses",
        "title": {"en": "The manifestly gauge-invariant spectrum of the Minimal Supersymmetric Standard Model", "de": "Das manifest eichinvariante Spektrum des Minimal Supersymmetrischen Standardmodells"},
        "description": {"en": "[Master's Thesis] Despite numerous efforts, no particles predicted by (broken) supersymmetric theories have been observed in experiments. One possible explanation is that the particle spectrum predicted by perturbation theory is not the physical spectrum predicted by the full, non-perturbative theory. In fact, because it is gauge-variant, it <i>cannot</i> be from a field theoretical standpoint.<br>A framework for analyzing the gauge-invariant, non-perturbative spectrum and efficiently contrasting it with perturbation theory results is provided by the Fröhlich-Morchio-Strocchi mechanism. For the standard model, this description shows remarkable agreement between the two spectra, supporting the results of perturbation theory. However, for many grand-unified-theory-like scenarios, qualitative differences between the two emerge. These have been thoroughly investigated and are confirmed by lattice findings. The absence of experimental evidence may be explained by the fact that one would <i>not</i> expect the perturbative spectrum to be observable in such circumstances.<br>For the first time, the investigations are extended to supersymmetric theories in this thesis. It constructs the minimal supersymmetric standard model's inherently gauge-invariant spectrum and shows that no qualitative differences occur. This finding supports the results of the standard perturbative treatment, which means that the actually physical spectrum would indeed include the undiscovered particles.", "de": "[Masterarbeit] Trotz zahlreicher Versuche ist es bisher nicht gelungen, die von (gebrochen-) supersymmetrischen Theorien vorhergesagten Teilchen im Experiment nachzuweisen. Eine Erklärung dafür könnte sein, dass das von Störungstheorie vorhergesagte Spektrum womöglich nicht dem physikalischen Spektrum der vollen Theorie entspricht. Aus feldtheoretischer Sicht ist dies sogar ausgeschlossen, da es eichabhängig ist.<br>Zur Untersuchung des nicht-störungstheoretischen, eichunabhängigen Spektrums eignet sich der Fröhlich-Morchio-Strocchi Mechanismus, welcher darüber hinaus eine direkte Verbindung mit dem bekannten, störungstheoretischen Spektrum herstellt. Im Falle des Standardmodells kann damit gezeigt werden, dass die beiden Spektren hervorragend übereinstimmen und der Formalismus folglich die Ergebnisse der Störungstheorie stützt. Allerdings kann es auch zu qualitativen Unterschieden kommen, was anhand von zahlreichen Szenarien im Bereich von großen vereinheitlichten Theorien demonstriert und in Gittersimulationen bestätigt wurde. In solchen Fällen würde man <i>nicht</i> erwarten, dass das störungstheoretische Spektrum physikalischen Gehalt hat, die entsprechenden Teilchen also auch im Experiment nicht beobachtbar sind.<br>In der vorliegenden Arbeit wird diesbezüglich erstmals eine supersymmetrische Theorie untersucht. Es wird gezeigt, wie das eichunabhängige Spektrum des minimal-supersymmetrischen Standardmodells konstruiert wird, und dass es qualitativ mit den Vorhersagen der Störungstheorie übereinstimmt. Somit werden abermals die störungstheoretischen Ergebnisse untermauert und bestätigt, dass das physikalische Spektrum in der Tat die unentdeckten Teilchen beinhaltet."},
        "date": {"en": "December 15, 2022", "de": "15. Dezember 2022"},
        "source": [{"tag": ".pdf", "link": `${resources_folder}MasterThesis_SCHREINER.pdf`},{"tag": "v1.1", "link": `${resources_folder}MasterThesis_SCHREINER_erratum.pdf`},{"tag": "slides", "link": `${resources_folder}2022_12_15_Defensio.pdf`}]
    },
    {
        "category": "projects",
        "title": {"en": "Determining the pion mass using Bethe-Salpeter-equation", "de": "Bestimmung der Pion Masse mittels Bethe-Salpeter-Gleichung"},
        "description": {"en": "Using a non-perturbative, functional approach to Quantum Chromodynamics (so-called Dyson-Schwinger and Bethe-Salpeter Equations) the mass of the lightest meson, the pion, is approximated numerically.", "de": "Mithilfe von nicht-störungstheoretischen, funktionalen Methoden (sogenannte Dyson-Schwinger- und Bethe-Salpeter Gleichungen) wird die Masse des leichtesten Mesons, dem Pion, numerisch approximiert."},
        "date": {"en": "July 18, 2022", "de": "18. Juli 2022"},
        "source": [{"tag": ".pdf", "link": `${resources_folder}2022_07_30_PionMass.pdf`},{"tag": "github", "link": "https://github.com/philipp-schreiner/StudentProject-PionMass"}]
    },
    {
        "category": "talks",
        "title": {"en": "The Fröhlich-Morchio-Strocchi mechanism in the Minimal Supersymmetric Standard Model", "de": "Der Fröhlich-Morchio-Strocci Mechanismus im Minimal Supersymmetrischen Standardmodell"},
        "description": {"en": "[Master Seminar at University of Graz] In this talk I present first results on the topic of my Master's Thesis for the MSSM weak-Higgs-sector. After repeating some concepts of supersymmetric theories from my previous talk, I explain how the FMS mechanism works in the SM and how the custodial symmetry plays a major role in it. Afterwards, I discuss how these concepts can be translated to the MSSM.", "de": "[Master Seminar, UNI Graz] In diesem Vortrag präsentiere ich die ersten Resultate meiner Masterarbeit, die den MSSM weak-Higgs Sektor betreffen. Nach einer kurzen Wiederholung von Konzepten, die für supersymmetrische Theorien wichtig sind, erkläre ich, wie der FMS Mechanismus im SM funktioniert und welche Rolle die Custodial Symmetry dabei spielt. Anschließend zeige ich, wie diese Konzepte auf das MSSM übertragen werden können."},
        "date": {"en": "June 14, 2022", "de": "14. Juni 2022"},
        "source": [{"tag": "slides", "link": `${resources_folder}2022_06_14_MSSM_FMS.pdf`}]
    },
    {
        "category": "projects",
        "title": {"en": "Particle creation in an expanding universe", "de": "Teilchenerzeugung im expandierenden Universum"},
        "description": {"en": "Placing a quantum field in a time-dependent gravitational background field (e.g. expanding universe) results in the production of particles. This behaviour is studied for a scalar field and a specific class of expansion scenarios.", "de": "Setzt man ein Quantenfeld in ein zeitabhängiges Gravitations-Hintergrundfeld (z.B. das expandierende Universum) kann man Teilchenproduktion beobachten. Dieses Verhalten wurde in diesem Projekt für ein skalares Feld und einer speziellen Klasse von Expansions-Szenarien studiert."},
        "date": {"en": "February 23, 2022", "de": "23. Februar 2022"},
        "source": [{"tag": ".pdf", "link": `${resources_folder}ParticleCreation.pdf`},{"tag": "slides", "link": `${resources_folder}2022_02_23_ParticleCreationInExpandingUniverse.pdf`}]
    },
    {
        "category": "talks",
        "title": {"en": "Introduction to Supersymmetry", "de": "Einführung in Supersymmetrie"},
        "description": {"en": "[Master Seminar at University of Graz] First talk concerning the topic of my Master's Thesis. Key concepts and algebraic considerations of supersymmetric theories are covered as well as an introduction to the minimal supersymmetric extension of the Standard Model of Particle Physics.", "de": "[Master Seminar, UNI Graz] Erster Vortrag zum Thema meiner Masterarbeit. Grundlegende Konzepte und algebraische Konstruktionen zum Thema <i>Supersymmetrie</i> und eine kurze Einführung in die minimal-supersymmetrische Erweiterung des Standardmodells der Teilchenphysik."},
        "date": {"en": "February 1, 2022", "de": "1. Februar 2022"},
        "source": [{"tag": "slides", "link": `${resources_folder}2022_02_01_SUSY_intro.pdf`}]
    },
    {
        "category": "projects",
        "title": {"en": "A nice way to explain the event horizon of a static Black Hole", "de": "Eine nette Erklärung des Erwartungshorizonts eines statischen schwarzen Lochs"},
        "description": {"en": "The description of a Black Hole's event horizon using Schwarzschild coordinates easily leads to confusion and seeming paradoxes. We explain <i>why</i> this is so and introduce more suitable coordinates which allow a more straight-forward interpretation.", "de": "Die Beschreibung eines Schwarzen Lochs (insbesondere dessen Ereignishorizonts) in Schwarzschild Koordinaten führt leicht und oft zu Verwirrungen und scheinbar paradoxen Phänomenen. Wir erklären <i>warum</i> es passiert und führen andere Koordinaten ein, die besser (und vor allem unmissverständlicher) für die Beschreibung geeignet sind."},
        "date": {"en": "December 8, 2021", "de": "8. Dezember 2021"},
        "source": [{"tag": ".pdf", "link": `${resources_folder}BlackholeEventHorizon.pdf`}]
    },
    {
        "category": "projects",
        "title": {"en": "Functional renormalization group approach for interacting Dirac fermions", "de": "Funktionale Renormierungsgruppe und interagierende Dirac Fermionen"},
        "description": {"en": "We derive the Wetterich Equation for fermions and formulate and solve it for a particular case of the Gross-Neveu-Model.", "de": "Wir leiten die Wetterich-Gleichung für Fermionen her. Weiters formulieren und lösen wir sie für den speziellen Fall des Gross-Neveu-Modells."},
        "date": {"en": "May 14, 2021", "de": "14. Mai 2021"},
        "source": [{"tag": ".pdf", "link": `${resources_folder}Gross_Neveu_Model.pdf`}, {"tag": "slides", "link": `${resources_folder}2021_07_Functional_renormalization_group_approach_for_interacting_Dirac_fermions.pdf`}]
    },
    {
        "category": "theses",
        "title": {"en": "Diagramatic methods in Theoretical Physics", "de": "Diagrammatische Methoden der theoretischen Physik"},
        "description": {"en": "[Bachelor's Thesis, in German] The popular Hartree-Fock Approximation which is used to solve the <i>N</i>-electron-problem serves as the starting point for a perturbative expansion which in turn allows us to calculate a correction to the ground-state energy of such a system. Like e.g. also in Particle Physics (Feynman Diagrams), perturbation theory is done using diagrammatic methods which not only highlight the structure behind the calculations but also simplify them considerably.", "de": "[Bachelorarbeit, auf Deutsch] Die sehr bekannte und oft verwendete Hartree-Fock Näherung, welche es erlaubt, das <i>N</i>-Elektronen-Problem verhältnismäßig einfach zu behandeln, dient in dieser Arbeit als Ausgangspunkt für eine störungstheoretische Behandlung des Problems. Damit gelingt es, eine verbesserte Grundzustandsenergie des Systems zu berechnen. Wie z.B. auch in der Teilchenphysik (Feynman Diagramme) kommen für die störungstheoretischen Rechnungen Diagramme zum Einsatz, die einerseits die Struktur der Rechnungen betonen und diese insbesondere auch erheblich erleichtern."},
        "date": {"en": "February 1, 2020", "de": "1. Februar 2020"},
        "source": [{"tag": ".pdf", "link": `${resources_folder}2020_02_01_BachelorThesis.pdf`}, {"tag": "slides", "link": `${resources_folder}2019_11_28_GoldstoneDiagrams.pdf`}]
    },
    {
        "category": "projects",
        "title": {"en": "Python Project: Strange Attractors", "de": "Python Projekt: Seltsame Attraktoren"},
        "description": {"en": "The goal of this project was to get experience with Python programming, especially object-oriented and GUI (Graphical User Interface) programming. The end result was an application which solved and visualized <i>chaotic</i> systems of differential equations (e.g. the Lorenz attractor) while being responsive to on-the-fly changes of the solver parameters.", "de": "Das Ziel dieses Projekts war es, Erfahrung mit Python GUIs (Graphical User Interface) zu sammeln. Das Endresultat war eine Anwendung, die Lösungen von <i>chaotischen</i> Differentialgleichungssystemen visualisiert (z.B. Lorenz-Attraktor) und auch in Echtzeit auf Änderungen der Eingabeparameter reagiert."},
        "date": {"en": "May 11, 2019", "de": "11. Mai 2019"},
        "source": [{"tag": "github", "link": "https://github.com/philipp-schreiner/StudentProject-AttractorApp"}]
    }
]

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i]["source"].length; j++) {
        var currentTag = data[i]["source"][j]["tag"];
        if (currentTag == "slides") {
            var temp = "Folien";
        } else {
            var temp = currentTag;
        }
        var newTag = {"en": currentTag, "de": temp};
        data[i]["source"][j]["tag"] = newTag;
    }
}
