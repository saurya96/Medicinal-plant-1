// Example dataset (abhi tumhe complete PLANTS array already hai,
// use same yahan paste karna)
const PLANTS = [
  {
    id:"neem",
    common_name:"Neem",
    scientific_name:"Azadirachta indica",
    regions:["Indian subcontinent","Tropics"],
    parts_used:["Leaves","Seed (oil)","Bark"],
    primary_uses:["Antiseptic","Insecticidal","Anti-inflammatory"],
    active_compounds:["Azadirachtin","Nimbin"],
    medicines_or_products:["Neem oil","Traditional extracts"],
    preparations:["Oil","Powder"],
    safety_notes:"Not for high-dose internal use without medical advice.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/neem.jpg",
    sources:["https://en.wikipedia.org/wiki/Azadirachta_indica"]
  },
  {
    id:"turmeric", common_name:"Turmeric", scientific_name:"Curcuma longa", family:"Zingiberaceae",
    regions:["South Asia"], parts_used:["Rhizome"],
    primary_uses:["Anti-inflammatory","Antioxidant"],
    active_compounds:["Curcumin"],
    medicines_or_products:["Turmeric/curcumin supplements","Topical ointments"],
    preparations:["Powder","Extract","Paste"],
    safety_notes:"High doses may interact with blood thinners; follow clinical guidance.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/termeric1.webp",
    sources:["https://en.wikipedia.org/wiki/Curcuma_longa"]
  },
  {
    id:"aloe", common_name:"Aloe vera", scientific_name:"Aloe vera", family:"Asphodelaceae",
    regions:["Arid regions (cultivated worldwide)"], parts_used:["Leaf gel","Latex"],
    primary_uses:["Burn care","Skin soothing"],
    active_compounds:["Aloin","Polysaccharides"],
    medicines_or_products:["Topical gels","Cosmetics"],
    preparations:["Gel","Extract"],
    safety_notes:"Oral latex can cause laxative effects; topical allergy possible.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/aloe_vera.jpg",
    sources:["https://en.wikipedia.org/wiki/Aloe_vera"]
  },
  {
    id:"ginger", common_name:"Ginger", scientific_name:"Zingiber officinale", family:"Zingiberaceae",
    regions:["Southeast Asia (cultivated worldwide)"], parts_used:["Rhizome"],
    primary_uses:["Nausea relief","Digestive aid","Anti-inflammatory"],
    active_compounds:["Gingerols","Shogaols"],
    medicines_or_products:["Ginger supplements","Teas","Anti-nausea preparations"],
    preparations:["Decoction","Powder","Extract"],
    safety_notes:"Generally safe in culinary doses; check interactions for high-dose supplements.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/ginger.jpeg",
    sources:["https://en.wikipedia.org/wiki/Ginger"]
  },
  {
    id:"peppermint", common_name:"Peppermint", scientific_name:"Mentha × piperita", family:"Lamiaceae",
    regions:["Native Europe/Middle East; cultivated worldwide"], parts_used:["Leaves (essential oil)"],
    primary_uses:["Digestive aid","Topical cooling"],
    active_compounds:["Menthol"],
    medicines_or_products:["Peppermint oil capsules","Topical liniments"],
    preparations:["Essential oil","Infusion"],
    safety_notes:"Oil can irritate skin or be unsafe for small children in concentrated form.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/mint.webp",
    sources:["https://en.wikipedia.org/wiki/Peppermint"]
  },
  {
    id:"chamomile", common_name:"Chamomile (German)", scientific_name:"Matricaria chamomilla", family:"Asteraceae",
    regions:["Europe & Western Asia; cultivated"], parts_used:["Flower heads"],
    primary_uses:["Mild sedative","Digestive aid","Wound healing"],
    active_compounds:["Apigenin","Flavonoids"],
    medicines_or_products:["Chamomile tea","Topical creams"],
    preparations:["Infusion","Extract"],
    safety_notes:"May cause allergic reaction in people sensitive to Asteraceae family.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/Chamomile%20(German).jpg",
    sources:["https://en.wikipedia.org/wiki/Matricaria_chamomilla"]
  },
  {
    id:"lavender", common_name:"Lavender", scientific_name:"Lavandula angustifolia", family:"Lamiaceae",
    regions:["Mediterranean; cultivated worldwide"], parts_used:["Flowers"],
    primary_uses:["Aromatherapy","Mild sedative","Topical soothing"],
    active_compounds:["Linalool","Linalyl acetate"],
    medicines_or_products:["Lavender essential oil","Aromatherapy products"],
    preparations:["Essential oil","Infusion"],
    safety_notes:"Use diluted for topical use; some people may be sensitive to fragrance.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/lavender-flowers.jpeg",
    sources:["https://en.wikipedia.org/wiki/Lavandula"]
  },
  {
    id:"cinchona", common_name:"Cinchona", scientific_name:"Cinchona spp.", family:"Rubiaceae",
    regions:["Andean forests (South America)"], parts_used:["Bark"],
    primary_uses:["Antimalarial (historical)","Antipyretic"],
    active_compounds:["Quinine","Quinidine"],
    medicines_or_products:["Quinine (historical antimalarial)","Tonic water (low quinine)"],
    preparations:["Bark extracts","Pharmaceutical derivatives"],
    safety_notes:"Quinine has known side effects and is used under medical guidance.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/Cinchona.jpg",
    sources:["https://en.wikipedia.org/wiki/Cinchona"]
  },
  {
    id:"ashwagandha", common_name:"Ashwagandha", scientific_name:"Withania somnifera", family:"Solanaceae",
    regions:["India, Middle East, Africa"], parts_used:["Root","Leaves"],
    primary_uses:["Adaptogen","Stress reduction","Strength"],
    active_compounds:["Withanolides"],
    medicines_or_products:["Ashwagandha root extract supplements"],
    preparations:["Powder","Extract","Decoction"],
    safety_notes:"Pregnant women should avoid high-dose use; consult healthcare provider.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/Ashwagandha.jpg",
    sources:["https://en.wikipedia.org/wiki/Withania_somnifera"]
  },
  {
    id:"tulsi", common_name:"Tulsi (Holy Basil)", scientific_name:"Ocimum tenuiflorum", family:"Lamiaceae",
    regions:["Indian subcontinent"], parts_used:["Leaves","Aerial parts"],
    primary_uses:["Respiratory support","Immunity","Stress relief"],
    active_compounds:["Eugenol","Ursolic acid"],
    medicines_or_products:["Tulsi tea","Herbal formulations"],
    preparations:["Infusion","Decoction"],
    safety_notes:"Generally safe, but check interactions with medicines and for pregnancy.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/tulsi-plant-500x500.webp",
    sources:["https://en.wikipedia.org/wiki/Ocimum_tenuiflorum"]
  },
  {
    id:"eucalyptus", common_name:"Eucalyptus", scientific_name:"Eucalyptus globulus", family:"Myrtaceae",
    regions:["Australia (cultivated worldwide)"], parts_used:["Leaves (oil)"],
    primary_uses:["Decongestant","Antiseptic"],
    active_compounds:["Eucalyptol (1,8-cineole)"],
    medicines_or_products:["Eucalyptus oil inhalants, rubs"],
    preparations:["Essential oil","Steam inhalation"],
    safety_notes:"Concentrated oil can be toxic if swallowed; avoid near infants.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/eucalyptus-varieties.jpg",
    sources:["https://en.wikipedia.org/wiki/Eucalyptus"]
  },
  {
    id:"ginkgo", common_name:"Ginkgo", scientific_name:"Ginkgo biloba", family:"Ginkgoaceae",
    regions:["China (cultivated worldwide)"], parts_used:["Leaves","Seeds"],
    primary_uses:["Cognitive support (studied)","Circulation"],
    active_compounds:["Ginkgolides","Flavonoids"],
    medicines_or_products:["Ginkgo leaf extracts (standardized)"],
    preparations:["Extract","Capsules"],
    safety_notes:"May increase bleeding risk; check with blood-thinning medications.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/Ginkgo.jpg",
    sources:["https://en.wikipedia.org/wiki/Ginkgo_biloba"]
  },
  {
    id:"stjohns", common_name:"St. John's Wort", scientific_name:"Hypericum perforatum", family:"Hypericaceae",
    regions:["Europe; cultivated/naturalized elsewhere"], parts_used:["Aerial parts, flowers"],
    primary_uses:["Mild depression (some evidence)"],
    active_compounds:["Hypericin","Hyperforin"],
    medicines_or_products:["Standardized extracts for mood support"],
    preparations:["Extract","Tincture"],
    safety_notes:"Many drug interactions (antidepressants, contraceptives); use under medical advice.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/St.%20John's%20Wort.webp",
    sources:["https://en.wikipedia.org/wiki/Hypericum_perforatum"]
  },
  {
    id:"calendula", common_name:"Calendula (Marigold)", scientific_name:"Calendula officinalis", family:"Asteraceae",
    regions:["Mediterranean; cultivated"], parts_used:["Flower heads"],
    primary_uses:["Topical wound healing","Anti-inflammatory"],
    active_compounds:["Triterpenoids","Flavonoids"],
    medicines_or_products:["Topical creams, wound-healing salves"],
    preparations:["Infusion","Ointment","Extract"],
    safety_notes:"Possible allergic reactions for Asteraceae-sensitive people.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vpump9a/field-marigold-Calendula-arvensis.webp",
    sources:["https://en.wikipedia.org/wiki/Calendula_officinalis"]
  },
  {
    id:"moringa", common_name:"Moringa", scientific_name:"Moringa oleifera", family:"Moringaceae",
    regions:["Indian subcontinent; tropics"], parts_used:["Leaves","Pods","Seeds"],
    primary_uses:["Nutrition","Anti-inflammatory","Antioxidant"],
    active_compounds:["Various vitamins, glucosinolates"],
    medicines_or_products:["Moringa leaf powder supplements","Nutritional products"],
    preparations:["Powder","Extract"],
    safety_notes:"Generally nutritious; high-dose supplements should be taken cautiously.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vq882kn/Moringa.jpg",
    sources:["https://en.wikipedia.org/wiki/Moringa_oleifera"]
  },
  {
    id:"willow", common_name:"Willow", scientific_name:"Salix alba", family:"Salicaceae",
    regions:["Europe, Asia; naturalized"], parts_used:["Bark"],
    primary_uses:["Analgesic/antipyretic (historical precursor to aspirin)"],
    active_compounds:["Salicin"],
    medicines_or_products:["Willow bark extracts (herbal analgesic)"],
    preparations:["Decoction","Extract"],
    safety_notes:"Avoid in children/teens with viral illness due to Reye-like concerns; bleeding risk with anticoagulants.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vq882kn/Willow.jpeg",
    sources:["https://en.wikipedia.org/wiki/Willow"]
  },
  {
    id:"licorice", common_name:"Licorice", scientific_name:"Glycyrrhiza glabra", family:"Fabaceae",
    regions:["Mediterranean, Western Asia"], parts_used:["Root"],
    primary_uses:["Coughs, stomach ulcers, anti-inflammatory"],
    active_compounds:["Glycyrrhizin"],
    medicines_or_products:["Licorice extracts, throat lozenges"],
    preparations:["Decoction","Extract"],
    safety_notes:"Chronic high intake may cause hypertension and potassium loss; use cautiously.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vq882kn/Licorice.jpeg",
    sources:["https://en.wikipedia.org/wiki/Licorice"]
  },
  {
    id:"feverfew", common_name:"Feverfew", scientific_name:"Tanacetum parthenium", family:"Asteraceae",
    regions:["Europe; naturalized"], parts_used:["Leaves","Flowers"],
    primary_uses:["Migraine prevention (some evidence)"],
    active_compounds:["Parthenolide"],
    medicines_or_products:["Feverfew supplements"],
    preparations:["Dried leaf","Extract"],
    safety_notes:"Can cause mouth ulcers in some; avoid during pregnancy.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vq882kn/Feverfew.jpeg",
    sources:["https://en.wikipedia.org/wiki/Tanacetum_parthenium"]
  },
  {
    id:"gotukola", common_name:"Gotu Kola", scientific_name:"Centella asiatica", family:"Apiaceae",
    regions:["Asia; tropical regions"], parts_used:["Leaves"],
    primary_uses:["Cognitive support; wound healing"],
    active_compounds:["Asiaticoside","Madecassoside"],
    medicines_or_products:["Topical creams; supplements"],
    preparations:["Extract","Infusion"],
    safety_notes:"Rare liver issues reported with high-dose long-term use.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vq882kn/gotukola.jpg",
    sources:["https://en.wikipedia.org/wiki/Centella_asiatica"]
  },
  {
    id:"blackcohosh", common_name:"Black Cohosh", scientific_name:"Actaea racemosa", family:"Ranunculaceae",
    regions:["Eastern North America"], parts_used:["Root"],
    primary_uses:["Menopausal symptoms (used in herbal medicine)"],
    active_compounds:["Triterpene glycosides"],
    medicines_or_products:["Cohosh extracts for menopausal support"],
    preparations:["Extract","Capsules"],
    safety_notes:"Possible liver toxicity in rare cases; consult healthcare provider.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vq882kn/Black%20Cohosh.webp",
    sources:["https://en.wikipedia.org/wiki/Black_cohosh"]
  },
  {
    id:"papaya", common_name:"Papaya (Papain)", scientific_name:"Carica papaya", family:"Caricaceae",
    regions:["Tropical Americas; cultivated worldwide"], parts_used:["Fruit, latex (papain)"],
    primary_uses:["Digestive enzyme (papain)","Wound debridement (in some preparations)"],
    active_compounds:["Papain (enzyme)"],
    medicines_or_products:["Digestive enzyme supplements, meat tenderizers"],
    preparations:["Extract","Enzyme preparations"],
    safety_notes:"Latex may be allergenic in sensitive individuals.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vq882kn/Papaya%20(Papain).jpeg",
    sources:["https://en.wikipedia.org/wiki/Carica_papaya"]
  },
  {
    id: "catharanthus_roseus",
    common_name: "Madagascar Periwinkle",
    scientific_name: "Catharanthus roseus",
    family: "Apocynaceae",
    regions: ["Madagascar", "India", "Tropical regions"],
    parts_used: ["Leaves", "Stems"],
    primary_uses: ["Cancer treatment (leukemia, Hodgkin's lymphoma)", "Diabetes (traditional)"],
    active_compounds: ["Vincristine", "Vinblastine"],
    medicines_or_products: ["Chemotherapy drugs (Vincristine, Vinblastine)"],
    preparations: ["Extracts", "Alkaloid isolation"],
    safety_notes: "Highly toxic if consumed raw. Only use under medical supervision.",
    image: "https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/madagascar-periwinkle.webp",
    sources: ["https://en.wikipedia.org/wiki/Catharanthus_roseus"]
  },
{
    id: "camellia_sinensis",
    common_name: "Green Tea",
    scientific_name: "Camellia sinensis",
    family: "Theaceae",
    regions: ["China", "India", "East Asia"],
    parts_used: ["Leaves"],
    primary_uses: ["Cancer prevention", "Antioxidant", "Cardiovascular health"],
    active_compounds: ["Epigallocatechin gallate (EGCG)"],
    medicines_or_products: ["Green tea extracts", "Dietary supplements"],
    preparations: ["Tea infusion", "Capsules", "Extracts"],
    safety_notes: "Excessive intake may cause liver issues; avoid high doses of extracts.",
    image: "https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/Green%20Tea.jpg",
    sources: ["https://en.wikipedia.org/wiki/Green_tea"]
},
{
    id: "taxus_brevifolia",
    common_name: "Pacific Yew",
    scientific_name: "Taxus brevifolia",
    family: "Taxaceae",
    regions: ["North America (Pacific Northwest)"],
    parts_used: ["Bark"],
    primary_uses: ["Cancer chemotherapy (ovarian, breast, lung cancer)"],
    active_compounds: ["Paclitaxel (Taxol)"],
    medicines_or_products: ["Taxol (Paclitaxel chemotherapy drug)"],
    preparations: ["Alkaloid extraction"],
    safety_notes: "Raw plant material is toxic; medicine only produced in labs under clinical guidelines.",
    image: "https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/Pacific%20Yew.jpeg",
    sources: ["https://en.wikipedia.org/wiki/Taxus_brevifolia"]
},

{
    id:"gymnema",
    common_name:"Gymnema",
    scientific_name:"Gymnema sylvestre",
    family:"Apocynaceae",
    regions:["India","Africa","Australia"],
    parts_used:["Leaves"],
    primary_uses:["Diabetes management","Weight loss"],
    active_compounds:["Gymnemic acids"],
    medicines_or_products:["Sugar control supplements"],
    preparations:["Leaf extract","Capsules"],
    safety_notes:"May lower blood sugar excessively if combined with medications.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/gymnema-sylvestre-extract.jpg",
    sources:["https://en.wikipedia.org/wiki/Gymnema_sylvestre"]
},

{
    id:"bittermelon",
    common_name:"Bitter Melon",
    scientific_name:"Momordica charantia",
    family:"Cucurbitaceae",
    regions:["Asia","Africa","South America"],
    parts_used:["Fruit","Seeds"],
    primary_uses:["Diabetes management","Digestive aid"],
    active_compounds:["Charantin","Polypeptide-p"],
    medicines_or_products:["Herbal diabetes remedies"],
    preparations:["Juice","Capsules","Powder"],
    safety_notes:"May cause hypoglycemia if taken with other diabetes drugs.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/Bitter%20Melon.jpeg",
    sources:["https://en.wikipedia.org/wiki/Momordica_charantia"]
},

{
    id:"vasaka",
    common_name:"Malabar Nut",
    scientific_name:"Justicia adhatoda",
    family:"Acanthaceae",
    regions:["India","Sri Lanka","Southeast Asia"],
    parts_used:["Leaves","Flowers"],
    primary_uses:["Asthma","Cough","Bronchitis"],
    active_compounds:["Vasicine","Vasicinone"],
    medicines_or_products:["Cough syrups","Ayurvedic asthma medicines"],
    preparations:["Juice","Powder","Extract"],
    safety_notes:"Safe in moderate doses; excess may irritate stomach.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/Malabar%20Nut.webp",
    sources:["https://en.wikipedia.org/wiki/Justicia_adhatoda"]
},
{
    id:"milkthistle",
    common_name:"Milk Thistle",
    scientific_name:"Silybum marianum",
    family:"Asteraceae",
    regions:["Mediterranean","Europe","North America"],
    parts_used:["Seeds"],
    primary_uses:["Liver protection","Detoxification"],
    active_compounds:["Silymarin"],
    medicines_or_products:["Liver tonics","Hepatitis support medicines"],
    preparations:["Extracts","Capsules"],
    safety_notes:"May interact with liver-metabolized drugs.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/Milk%20Thistle.jpg",
    sources:["https://en.wikipedia.org/wiki/Silybum_marianum"]
},
{
    id:"willow",
    common_name:"White Willow",
    scientific_name:"Salix alba",
    family:"Salicaceae",
    regions:["Europe","Asia"],
    parts_used:["Bark"],
    primary_uses:["Pain relief","Arthritis","Fever"],
    active_compounds:["Salicin (precursor to Aspirin)"],
    medicines_or_products:["Pain relief tablets","Anti-inflammatory drugs"],
    preparations:["Bark extract","Tea","Capsules"],
    safety_notes:"Should not be used with blood thinners; aspirin-like side effects possible.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/White%20Willow.jpg",
    sources:["https://en.wikipedia.org/wiki/Salix_alba"]
},
{
    id:"rauwolfia",
    common_name:"Indian Snakeroot",
    scientific_name:"Rauvolfia serpentina",
    family:"Apocynaceae",
    regions:["India","Southeast Asia"],
    parts_used:["Roots"],
    primary_uses:["High blood pressure","Anxiety","Insomnia"],
    active_compounds:["Reserpine"],
    medicines_or_products:["Antihypertensive drugs"],
    preparations:["Root extract","Tablets"],
    safety_notes:"May cause low blood pressure and depression in excess.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/Indian%20Snakeroot.jpg",
    sources:["https://en.wikipedia.org/wiki/Rauvolfia_serpentina"]
},
{
    id:"punarnava",
    common_name:"Punarnava",
    scientific_name:"Boerhavia diffusa",
    family:"Nyctaginaceae",
    regions:["India","Tropical regions"],
    parts_used:["Roots","Leaves"],
    primary_uses:["Kidney stones","Urinary tract infections","Swelling"],
    active_compounds:["Boeravinones"],
    medicines_or_products:["Diuretic medicines","Ayurvedic kidney tonics"],
    preparations:["Powder","Extract","Decoction"],
    safety_notes:"Safe in moderate amounts; consult doctor in kidney disorders.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/Punarnava.webp",
    sources:["https://en.wikipedia.org/wiki/Boerhavia_diffusa"]
},
{
    id:"echinacea",
    common_name:"Echinacea",
    scientific_name:"Echinacea purpurea",
    family:"Asteraceae",
    regions:["North America","Europe"],
    parts_used:["Roots","Flowers"],
    primary_uses:["Immunity booster","Cold & flu","Viral infections"],
    active_compounds:["Echinacoside","Alkylamides"],
    medicines_or_products:["Immunity supplements","Syrups"],
    preparations:["Extract","Capsules","Tea"],
    safety_notes:"Safe for short-term use; avoid if allergic to daisies.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/Echinacea.jpeg",
    sources:["https://en.wikipedia.org/wiki/Echinacea"]
},



{
    id:"bhumyamalaki",
    common_name:"Bhumyamalaki (Stonebreaker)",
    scientific_name:"Phyllanthus niruri",
    family:"Phyllanthaceae",
    regions:["India","Tropical regions worldwide"],
    parts_used:["Whole plant"],
    primary_uses:["Hepatitis B","Liver detox","Kidney stones"],
    active_compounds:["Phyllanthin","Hypophyllanthin"],
    medicines_or_products:["Liver tonics","Hepatitis support formulations"],
    preparations:["Extract","Capsules","Juice"],
    safety_notes:"Generally safe in moderate doses.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/bhumyamalaki.jpeg",
    sources:["https://en.wikipedia.org/wiki/Phyllanthus_niruri"]
},
{
    id:"beetroot",
    common_name:"Beetroot",
    scientific_name:"Beta vulgaris",
    family:"Amaranthaceae",
    regions:["Worldwide (temperate regions)"],
    parts_used:["Root"],
    primary_uses:["Anemia","Iron deficiency","Blood health"],
    active_compounds:["Iron","Betalains"],
    medicines_or_products:["Iron tonics","Dietary supplements"],
    preparations:["Juice","Powder","Extract"],
    safety_notes:"Safe as food; excess may color urine/stool.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/Beetroot_Tatiana-Volgutova.webp",
    sources:["https://en.wikipedia.org/wiki/Beetroot"]
},
{
    id:"valerian",
    common_name:"Valerian",
    scientific_name:"Valeriana officinalis",
    family:"Caprifoliaceae",
    regions:["Europe","Asia"],
    parts_used:["Roots","Rhizomes"],
    primary_uses:["Epilepsy","Insomnia","Anxiety"],
    active_compounds:["Valerenic acid","Isovaleric acid"],
    medicines_or_products:["Herbal sedatives","Sleep aids"],
    preparations:["Extract","Capsules","Tea"],
    safety_notes:"May cause drowsiness; avoid alcohol use with it.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/valerian.jpg",
    sources:["https://en.wikipedia.org/wiki/Valeriana_officinalis"]
},
{
    id:"cranberry",
    common_name:"Cranberry",
    scientific_name:"Vaccinium macrocarpon",
    family:"Ericaceae",
    regions:["North America","Europe"],
    parts_used:["Berries"],
    primary_uses:["Urinary Tract Infections","Bladder infections"],
    active_compounds:["Proanthocyanidins"],
    medicines_or_products:["Cranberry juice","UTI prevention capsules"],
    preparations:["Juice","Extract","Capsules"],
    safety_notes:"Safe; may interact with blood thinners.",
    image:"https://uploads.onecompiler.io/43svmx7xu/43vqnxysf/cranberry.webp",
    sources:["https://en.wikipedia.org/wiki/Cranberry"]
},

];

  

// DOM
const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const backdrop = document.getElementById("backdrop");
const closeModal = document.getElementById("closeModal");

// Render cards
function renderPlants(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb"><img src="${p.image}" alt="${p.common_name}"></div>
      <div class="card-body">
        <div class="title"><h3>${p.common_name}</h3></div>
        <div class="scientific">${p.scientific_name}</div>
        <div class="meta"><b>Uses:</b> ${p.primary_uses.join(", ")}</div>
      </div>
    `;
    card.onclick = () => showModal(p);
    grid.appendChild(card);
  });
}

// Show modal
function showModal(p) {
  document.getElementById("md-title").innerText = p.common_name;
  document.getElementById("md-scientific").innerText = p.scientific_name;
  document.getElementById("md-image").src = p.image;
  document.getElementById("md-regions").innerText = p.regions.join(", ");
  document.getElementById("md-parts").innerText = p.parts_used.join(", ");
  document.getElementById("md-preps").innerText = p.preparations.join(", ");
  document.getElementById("md-uses").innerHTML = p.primary_uses.map(u=>`<li>${u}</li>`).join("");
  document.getElementById("md-compounds").innerText = p.active_compounds.join(", ");
  document.getElementById("md-products").innerHTML = p.medicines_or_products.map(m=>`<li>${m}</li>`).join("");
  document.getElementById("md-safety").innerText = p.safety_notes;
  document.getElementById("md-sources").innerHTML = p.sources.map(s=>`<li><a href="${s}" target="_blank">${s}</a></li>`).join("");
  backdrop.style.display = "flex";
}

// Search
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase();
  const filtered = PLANTS.filter(p =>
    p.common_name.toLowerCase().includes(q) ||
    p.scientific_name.toLowerCase().includes(q) ||
    p.primary_uses.join(" ").toLowerCase().includes(q) ||
    p.active_compounds.join(" ").toLowerCase().includes(q)
  );
  renderPlants(filtered);
});

// Close modal
closeModal.addEventListener("click", ()=> backdrop.style.display="none");
backdrop.addEventListener("click", e=>{ if(e.target===backdrop) backdrop.style.display="none"; });

// Initial render
renderPlants(PLANTS);
