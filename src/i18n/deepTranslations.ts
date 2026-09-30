// Deep translations keyed by their natural English text.
// Used by long-form product education components and a few utility pages.
// Components call t("Exact English string") — English falls back to the key,
// Chinese reads from these tables.

type Dict = Record<string, string>;

// ============================================================
// Simplified Chinese (zh-CN)
// ============================================================
export const deepZhCN: Dict = {
  // -------- Common across deep blocks --------
  "The Vavitas Standard": "Vavitas 标准",
  "Vavitas brand mark": "Vavitas 品牌标识",
  "Who It's For": "适合人群",
  "Why Vavitas Fish Oil": "为何选择 Vavitas 鱼油",
  "Why Vavitas D3 + K2": "为何选择 Vavitas D3 + K2",
  "Engineered for Performance, Verified for Safety": "性能领先 · 安全可验证",
  "Manufactured in the USA": "美国生产",
  "Sunlight on every continent. One promise of life.": "阳光普照每一片大陆，守护生命的同一承诺。",
  "Globally Sourced · Ethically Crafted · Universally Trusted": "全球甄选 · 匠心制造 · 普世信赖",
  "From the sunlit fields and pristine seas of our partner growers, to families across every continent — Vavitas honors the responsibility of protecting human vitality with master-crafted nutrition for all peoples, all generations.": "从合作种植者阳光下的田野与纯净海洋，到遍及每一片大陆的家庭——Vavitas 以匠心打造的营养，肩负守护全人类、世代生命活力的责任。",
  "Per softgel": "每粒软胶囊",
  "Better absorption": "吸收更佳",
  "Trusted quality": "值得信赖的品质",
  "Bioavailable": "生物利用率",
  "Fermented": "发酵工艺",
  "Clinical dose": "临床剂量",
  "Visible results": "可见效果",

  // -------- Ubiquinol --------
  "Ubiquinol 101 · Powered by Kaneka Ubiquinol®": "辅酶 Q10 还原型 101 · 由 Kaneka Ubiquinol® 提供",
  "The Active Form of CoQ10 Your Cells Can Use Immediately":
    "细胞可直接利用的辅酶 Q10 活性形式",
  "CoQ10 fuels every cell in your body — but as we age, our ability to convert it into its usable form declines. Vavitas Ubiquinol delivers the body-ready form directly, so your heart, brain and muscles get the energy and antioxidant protection they need.":
    "辅酶 Q10 为体内每个细胞供能,但随着年龄增长,身体将其转化为可用形式的能力逐渐下降。Vavitas Ubiquinol 直接提供人体可立即使用的形式,为心脏、大脑和肌肉带来所需的能量与抗氧化保护。",
  "Ubiquinone": "氧化型(Ubiquinone)",
  "The Raw Material": "原始形态",
  "The oxidized form of CoQ10. Before your body can use it as an antioxidant, it must first convert ubiquinone into ubiquinol — a process that becomes less efficient as we age.":
    "辅酶 Q10 的氧化型。身体需先将其转化为还原型(ubiquinol)才能作为抗氧化剂使用,而这一转化效率会随年龄下降。",
  "Ubiquinol": "还原型(Ubiquinol)",
  "The Finished Product": "活性成品",
  "8× more bioavailable": "生物利用率提升 8 倍",
  "Cellular Energy Engine": "细胞能量引擎",
  "Where Your Body's ATP Is Born": "ATP 能量的诞生之地",
  "Inside every cell, mitochondria turn the food you eat into ATP — the fuel that powers every heartbeat, thought and movement. Ubiquinol is essential to this energy chain, shuttling electrons that drive ATP production and neutralizing free radicals that damage your cells along the way.":
    "细胞内的线粒体将食物转化为 ATP,为每一次心跳、思考与动作提供动力。Ubiquinol 在这一能量链中至关重要——既传递电子驱动 ATP 合成,也中和损伤细胞的自由基。",
  "Why Ubiquinol Matters": "为何 Ubiquinol 至关重要",
  "Four Reasons to Choose the Active Form": "选择活性形式的四个理由",
  "Natural Decline With Age": "随年龄自然下降",
  "After 40, the body's ability to convert ubiquinone into ubiquinol slows down — making the active form a smarter choice.":
    "40 岁后,身体将氧化型转化为还原型的能力减弱,直接补充活性型更为明智。",
  "Superior Absorption": "卓越吸收",
  "Clinical studies show Ubiquinol is approximately 8× more bioavailable than standard CoQ10.":
    "临床研究显示,Ubiquinol 的生物利用率约为普通辅酶 Q10 的 8 倍。",
  "Antioxidant Power": "强力抗氧化",
  "The only form of CoQ10 that acts directly as an antioxidant, shielding cells from oxidative damage.":
    "唯一可直接发挥抗氧化作用的辅酶 Q10 形式,守护细胞免受氧化损伤。",
  "Energy Efficiency": "高效供能",
  "Already in the form your body needs — fueling the heart, brain and muscles that depend on mitochondrial activity.":
    "已是人体可直接使用的形式,为依赖线粒体活动的心脏、大脑和肌肉持续供能。",
  "Heart Health Spotlight": "心脏健康聚焦",
  "A Tireless Muscle Demands Tireless Energy": "永不停歇的肌肉,需要永不停歇的能量",
  "The heart contains some of the highest concentrations of CoQ10 in the body — for good reason. It beats over 100,000 times a day, and every contraction depends on mitochondrial energy. Ubiquinol helps maintain the cellular fuel and antioxidant balance your cardiovascular system relies on.":
    "心脏是人体辅酶 Q10 浓度最高的器官之一——这并非偶然。每天约 10 万次心跳的背后,都依赖线粒体能量。Ubiquinol 帮助维持心血管系统所需的细胞能量与抗氧化平衡。",
  "*Statins and certain medications are known to deplete CoQ10 levels — talk to your healthcare provider if this applies to you.":
    "*已知他汀类等药物会消耗体内辅酶 Q10——如适用,请咨询您的医生。",
  "Designed for the Lives You Want to Keep Living": "为你所珍视的生活方式而设计",
  "Adults 40+ supporting healthy aging from the cellular level":
    "40 岁以上,从细胞层面支持健康老去的人群",
  "People taking statins, which are known to deplete CoQ10":
    "服用他汀类等已知会消耗辅酶 Q10 药物的人群",
  "Anyone focused on long-term heart and cardiovascular wellness":
    "重视长期心脏与心血管健康的人群",
  "Active individuals seeking sustained energy and recovery":
    "追求持续能量与高效恢复的运动人群",
  "Those experiencing fatigue or low daily energy":
    "经常感到疲劳或日常精力不足者",
  "Made with": "采用",
  "the World's Most Trusted Source": "全球最值得信赖的原料源头",
  "Vavitas formulates with Kaneka Ubiquinol® — a patented ubiquinol ingredient and the active antioxidant form of CoQ10. Produced through Kaneka's proprietary yeast-fermentation process and manufactured at its U.S. facility, it's the same form recognized worldwide for its stability, purity and superior bioavailability — now delivered in our premium softgel for everyday use.":
    "Vavitas 选用 Kaneka Ubiquinol® ——专利还原型辅酶 Q10 成分,辅酶 Q10 的活性抗氧化形式。采用 Kaneka 独有的酵母发酵工艺,于其美国工厂制造,以稳定性、纯度与生物利用率享誉全球——现以高端软胶囊,陪伴你的日常。",

  // -------- Collagen --------
  "Collagen 101 · Powered by VERISOL®": "胶原 101 · 由 VERISOL® 提供",
  "The Bioactive Collagen Peptide Clinically Proven for Skin, Hair & Nails":
    "经临床验证、针对皮肤·头发·指甲的生物活性胶原肽",
  "Collagen is the body's most abundant protein — the scaffolding behind firm skin, strong hair and resilient nails. After 25, our natural collagen production drops about 1% every year. Vavitas Collagen Peptides deliver VERISOL® — bioactive peptides specifically optimized to stimulate skin cell metabolism from within.":
    "胶原蛋白是人体含量最丰富的蛋白质——支撑紧致肌肤、健康头发与坚韧指甲的核心结构。25 岁后,体内胶原以每年约 1% 的速度流失。Vavitas 胶原肽采用 VERISOL® ——经专门优化、可由内激活皮肤细胞代谢的生物活性肽。",
  "Generic Collagen": "普通胶原蛋白",
  "Undirected Protein": "缺乏靶向的蛋白",
  "Most collagen powders are generic hydrolyzed peptides — fragments of varying size that the body uses for general protein needs, with no clinical evidence of where they end up.":
    "市面多数胶原粉为通用水解胶原肽,大小不一,被身体当作普通蛋白消耗,缺乏作用部位的临床证据。",
  "VERISOL® Bioactive Peptides": "VERISOL® 生物活性肽",
  "Targeted to Your Skin Cells": "精准靶向皮肤细胞",
  "Specifically optimized peptide sizes that stimulate fibroblasts in the skin —":
    "针对皮肤成纤维细胞优化的特定肽段——",
  "clinically proven": "临床证实",
  "to boost elasticity in 4 weeks and reduce wrinkle volume in 8 weeks.":
    "可在 4 周提升弹性,8 周减少皱纹体积。",
  "The Body's Scaffolding": "身体的支架",
  "Why Collagen Is the Protein That Holds Us Together": "胶原:让我们浑然一体的蛋白",
  "Collagen makes up roughly 30% of all protein in the body — the structural matrix of skin, hair, nails, bones, joints and connective tissue. As natural production declines with age, supplementing with bioactive peptides helps replenish this essential scaffolding from the inside out.":
    "胶原约占人体总蛋白质的 30%,是皮肤、头发、指甲、骨骼、关节与结缔组织的结构基质。随着年龄增长合成下降,补充生物活性肽可由内重建这一关键支架。",
  "Why VERISOL® Matters": "为何 VERISOL® 重要",
  "Four Reasons to Choose Bioactive Peptides": "选择生物活性肽的四个理由",
  "Skin Elasticity": "肌肤弹性",
  "Clinical studies show a significant increase in skin elasticity after just 4 weeks of daily use.":
    "临床研究显示,坚持每日服用 4 周,肌肤弹性显著提升。",
  "Wrinkle Reduction": "皱纹减少",
  "Measurable reduction in eye wrinkle volume after 8 weeks — supporting visibly smoother skin.":
    "8 周后眼周皱纹体积可测量地减少,肌肤更显平滑。",
  "Hair & Nail Strength": "头发与指甲强健",
  "Stronger nail growth and reduced breakage, plus improved hair resilience and shine.":
    "指甲生长更牢固、不易断裂,头发更具韧性与光泽。",
  "Joint & Connective Tissue": "关节与结缔组织",
  "Supports the connective tissue that cushions joints and maintains mobility as you age.":
    "支持缓冲关节、维持灵活活动的结缔组织。",
  "Beauty From Within": "由内而美",
  "Skincare That Works Where Topicals Can't Reach": "护肤外用难以企及之处,由内护理",
  "Topical creams sit on the surface — but visible aging starts in the deeper dermal layer where collagen is produced. VERISOL® bioactive peptides travel through the bloodstream to fibroblasts, signalling them to produce new collagen, elastin and proteoglycans for firmer, more hydrated skin.":
    "外用面霜停留于表层,但衰老的起点在更深的真皮层——胶原合成之处。VERISOL® 生物活性肽经血流到达成纤维细胞,激活新生胶原、弹性蛋白与蛋白聚糖,带来更紧致、更润泽的肌肤。",
  "*Results based on randomized, double-blind, placebo-controlled clinical studies on VERISOL® bioactive collagen peptides.":
    "*结果基于针对 VERISOL® 生物活性胶原肽的随机、双盲、安慰剂对照临床研究。",
  "For Everyone Who Wants to Age on Their Own Terms": "为想要从容老去的每一个人",
  "Adults 25+ noticing the first signs of fine lines or loss of firmness":
    "25 岁以上,开始察觉细纹或紧致度下降的人群",
  "Anyone prioritizing visible skin elasticity, hydration and glow":
    "重视肌肤弹性、水润与光泽的人群",
  "People with brittle nails or hair that's lost its strength":
    "指甲易脆裂、头发缺乏韧性的人群",
  "Active individuals supporting joint and connective tissue resilience":
    "需呵护关节与结缔组织的活跃人群",
  "Beauty-from-within enthusiasts who want clinically validated results":
    "追求临床验证效果的内服美容爱好者",
  "the Clinically Proven Bioactive Collagen Peptide": "经临床验证的生物活性胶原肽",
  "Vavitas formulates with VERISOL® — a specifically optimized bioactive collagen peptide backed by multiple peer-reviewed clinical studies for skin elasticity, wrinkle reduction and nail strength. Sourced from a leading European collagen specialist and delivered at the full clinical dose, with no fillers or artificial flavors.":
    "Vavitas 选用 VERISOL® ——一款经多项同行评审临床研究验证、有助于肌肤弹性、皱纹减少与指甲强韧的生物活性胶原肽。源自欧洲领先胶原专家,以完整临床剂量呈现,不含填充剂与人工香料。",

  // -------- Vitamin D3 + K2 --------
  "Vitamin D3 + K2 101 · The Synergy Formula": "维生素 D3 + K2 101 · 协同配方",
  "Sunshine in a Softgel — Engineered for the Modern Indoor Life":
    "软胶囊中的阳光——为现代久坐室内生活而设计",
  "Traditional Vitamin D": "传统维生素 D",
  "Half the Equation": "方程式的一半",
  "D2 or low-dose D3 boosts calcium absorption — but without K2, that calcium can drift into arteries and soft tissue instead of strengthening the skeleton it was meant to build.":
    "D2 或低剂量 D3 可促进钙吸收,但若缺乏 K2,钙可能沉积于动脉与软组织,而非真正强化骨骼。",
  "Vavitas D3 + K2 (MK-7)": "Vavitas D3 + K2(MK-7)",
  "The Complete System": "完整系统",
  "D3 unlocks calcium absorption from the gut. K2 (MK-7) activates osteocalcin and matrix Gla protein to":
    "D3 在肠道开启钙的吸收。K2(MK-7)激活骨钙素与基质 Gla 蛋白,",
  "guide that calcium into bones": "将钙导向骨骼",
  "while keeping it out of arteries — true cardiovascular and skeletal synergy.":
    ",同时使其远离动脉——实现心血管与骨骼的真正协同。",
  "The Modern Sunlight Gap": "现代阳光缺口",
  "We Live Indoors. Our Biology Hasn't Caught Up.": "我们生活在室内,生理却尚未适应",
  "The Science of Synergy": "协同的科学",
  "How D3 and K2 Work Together — Step by Step": "D3 与 K2 如何协同——逐步解析",
  "D3 Absorbs Calcium": "D3 促进钙吸收",
  "Vitamin D3 (cholecalciferol) signals your intestines to absorb calcium from food into the bloodstream — the form your body actually uses.":
    "维生素 D3(胆钙化醇)促使肠道将食物中的钙吸收入血——人体真正可利用的形式。",
  "Mealtime · gut uptake": "用餐时 · 肠道吸收",
  "K2 Activates the Couriers": "K2 激活搬运蛋白",
  "K2 (MK-7) activates osteocalcin and MGP — the proteins responsible for transporting calcium to bones and away from arterial walls.":
    "K2(MK-7)激活骨钙素与 MGP——负责将钙输送至骨骼、远离动脉壁的关键蛋白。",
  "In-transit · protein couriers": "运输中 · 蛋白质搬运",
  "Calcium Lands Where It Belongs": "钙抵达它该去的地方",
  "Bones and teeth gain density. Arteries stay flexible. The cardiovascular and skeletal systems work in harmony — not in conflict.":
    "骨骼与牙齿获得密度,动脉保持弹性。心血管与骨骼系统协同合作,而非彼此冲突。",
  "Bone density · supple arteries": "骨密度 · 柔韧血管",
  "Sunlight Source": "阳光来源",
  "D3 synthesised": "合成 D3",
  "Gut Absorption": "肠道吸收",
  "Calcium uptake": "钙的吸收",
  "Skeletal Strength": "骨骼强健",
  "K2 directs to bone": "K2 导入骨骼",
  "Heart Protection": "心脏守护",
  "Arteries stay clear": "动脉保持通畅",
  "Bone & Heart Spotlight": "骨骼与心脏聚焦",
  "One Nutrient Pair. Two Lifelong Systems.": "一对营养,守护两大终生系统",
  "*MK-7 is the most bioavailable form of K2, with a half-life over 70× longer than MK-4.":
    "*MK-7 是 K2 中生物利用率最高的形式,半衰期超过 MK-4 的 70 倍。",
  "Clinically Optimal Dose": "临床优选剂量",
  "5000IU D3 — the daily level endorsed by The Endocrine Society for adults with limited sun exposure.":
    "5000IU D3 —— 内分泌学会推荐、适合阳光暴露不足成年人的每日水平。",
  "MK-7 Bioactive Form": "MK-7 生物活性形式",
  "Premium menaquinone-7 from natural fermentation — the most absorbable, longest-lasting form of K2.":
    "源自天然发酵的优质甲基萘醌-7,K2 中吸收最佳、作用最持久的形式。",
  "Oil-Suspended Delivery": "油剂悬浮递送",
  "Suspended in olive oil for fat-soluble vitamins to absorb up to 5× more efficiently than dry tablets.":
    "以橄榄油悬浮,脂溶性维生素吸收效率比干压片剂高出最多 5 倍。",
  "Third-Party Verified": "第三方验证",
  "Every batch tested in a US NSF-certified facility for potency, purity and freedom from heavy metals and contaminants.":
    "每批次均在美国 NSF 认证机构检测效价、纯度及重金属与污染物。",
  "Who Will Thrive With It": "谁将因此受益",
  "Made for Bright Days and Long Lives": "为明媚日子与悠长岁月而生",
  "Office workers, drivers and anyone spending most daylight hours indoors":
    "白领、司机以及大部分白昼时间在室内的人群",
  "Adults 40+ protecting bone density and cardiovascular flexibility":
    "40 岁以上,呵护骨密度与心血管弹性的人群",
  "Women in or approaching menopause, when bone loss accelerates":
    "处于或即将进入更年期、骨流失加速的女性",
  "Active families building strong skeletons for the next generation":
    "为下一代构筑强健骨骼的活力家庭",
  "People in northern latitudes or who consistently use sunscreen":
    "生活在高纬度地区或长期使用防晒霜的人群",
  "Anyone supplementing calcium and looking for safe, balanced support":
    "正在补钙、希望获得安全均衡支持的人群",
  "A New Benchmark for": "全新标杆",
  "Vavitas D3 + K2 sets a new bar for the category — pairing a clinically meaningful 5000IU of D3 with 100mcg of bioactive MK-7 in a single oil-suspended softgel. Manufactured in a US FDA-registered, NSF-certified facility and third-party tested for purity, it's the simplest, most rigorously verified way to close the modern sunshine gap and support lifelong bone and cardiovascular wellness.":
    "Vavitas D3 + K2 重新定义品类——在单粒油剂软胶囊中,集合临床意义剂量 5000IU D3 与 100mcg 活性 MK-7。于美国 FDA 注册、NSF 认证工厂生产,并经第三方纯度检测,是弥合现代阳光缺口、守护终生骨骼与心血管健康最简洁、最严谨可验证的方式。",
  "D3 Daily": "D3 每日剂量",
  "Bioactive K2": "活性 K2",
  "Certified": "已认证",

  // -------- Fish Oil --------
  "Fish Oil 101 · The Deep-Sea Omega-3 Formula": "鱼油 101 · 深海 Omega-3 配方",
  "Ordinary Fish Oil": "普通鱼油",
  "Low Concentration, EPA + DHA Only": "低浓度,仅含 EPA + DHA",
  "Most fish oils deliver only 30% omega-3 from large predatory fish — meaning more capsules, more fillers, higher heavy-metal exposure, and the missing third partner: DPA, the quiet multiplier of vascular metabolism.":
    "多数鱼油仅含 30% Omega-3,且取自大型掠食性鱼类——意味着更多胶囊、更多填充、更高重金属风险,且缺少血管代谢的隐性放大器:DPA。",
  "Vavitas Deep-Sea Fish Oil": "Vavitas 深海鱼油",
  "70% Omega-3 with the Complete EPA · DHA · DPA Trio":
    "70% Omega-3,EPA · DHA · DPA 完整三重组合",
  "10–20× more efficiently": "效率提升 10–20 倍",
  "The Modern Omega-3 Gap": "现代 Omega-3 缺口",
  "We Eat Less Deep-Sea Fish. Our Vessels Notice.": "深海鱼摄入减少,血管最先察觉",
  "Omega-3 / softgel": "Omega-3 / 每粒",
  "Complete trio": "完整三重",
  "5-Star Tested": "五星检测",
  "From Deep Sea to Cellular Health": "从深海到细胞健康",
  "How Vavitas Omega-3 Works — Step by Step": "Vavitas Omega-3 工作原理——逐步解析",
  "Sourced From Cold Deep Seas": "源自寒冷深海",
  "Small Peruvian anchovies — short-lived, low on the food chain — provide naturally clean omega-3 oil with minimal heavy metal accumulation.":
    "秘鲁小凤尾鱼——生命周期短、处于食物链低端——天然提供纯净 Omega-3 鱼油,重金属积累极低。",
  "Origin · Peruvian deep waters": "源头 · 秘鲁深海",
  "Molecularly Distilled & Stabilised": "分子蒸馏 · 稳定保鲜",
  "Multi-stage molecular distillation removes contaminants and concentrates omega-3 to 70%+, while strict oxidation control keeps every softgel fresh.":
    "多级分子蒸馏去除污染物、将 Omega-3 浓缩至 70% 以上,严格的氧化控制让每粒软胶囊保持新鲜。",
  "Refinement · low oxidation": "精炼 · 低氧化",
  "Absorbed Where It Matters": "在重要之处被吸收",
  "EPA, DHA and DPA integrate into cell membranes — fueling the heart, brain, retina and vascular tissues that depend on marine omega-3.":
    "EPA、DHA 与 DPA 融入细胞膜,为依赖海洋 Omega-3 的心脏、大脑、视网膜与血管组织持续供能。",
  "Cellular · whole-body delivery": "细胞级 · 全身递送",
  "Deep-Sea Source": "深海源头",
  "Peruvian anchovy": "秘鲁凤尾鱼",
  "Molecular Refinement": "分子精炼",
  "70%+ Omega-3": "Omega-3 ≥ 70%",
  "Cellular Uptake": "细胞吸收",
  "Heart · brain · vessels": "心脏 · 大脑 · 血管",
  "Active Longevity": "活力长寿",
  "Daily, lifelong support": "每日,终生守护",
  "DPA · The Quiet Multiplier": "DPA · 隐性放大器",
  "One Trio. A Lifetime of Vascular Resilience.": "一组三重,守护终生血管韧性",
  "*IFOS-verified composition consistently exceeds the declared 25 mg DPA — typically >50 mg per softgel.":
    "*IFOS 检测显示 DPA 实际含量稳定超出标示 25mg,通常每粒 >50mg。",
  "Cardiovascular": "心血管",
  "EPA & DHA help maintain healthy lipid levels and normal vascular function.":
    "EPA 与 DHA 有助维持健康血脂水平与正常血管功能。",
  "Brain & Cognition": "大脑与认知",
  "DHA is a primary structural fatty acid of the brain, supporting clarity and focus.":
    "DHA 是大脑主要结构性脂肪酸,有助清晰思考与专注。",
  "Vision Support": "视力支持",
  "DHA is a critical building block of the retina, supporting healthy vision.":
    "DHA 是视网膜关键结构成分,有助维护健康视力。",
  "Joint & Mobility": "关节与活动",
  "Omega-3 supports a balanced inflammatory response for active, comfortable joints.":
    "Omega-3 有助平衡炎症反应,守护灵活舒适的关节。",
  "High Concentration": "高浓度",
  "700 mg Omega-3 per softgel (EPA 400 + DHA 300 + DPA 25 mg) — fewer capsules, easier daily compliance.":
    "每粒 700mg Omega-3(EPA 400 + DHA 300 + DPA 25mg)——更少胶囊,更易坚持。",
  "Low-Oxidation Control": "低氧化控制",
  "Strict TOTOX standards keep every softgel fresh and bioactive — no fishy aftertaste, full nutritional value.":
    "严格 TOTOX 标准保持每粒软胶囊新鲜与生物活性——无鱼腥回味,营养价值完整。",
  "Deep-Sea Anchovy Source": "深海凤尾鱼来源",
  "Small Peruvian anchovies — naturally lower in mercury and contaminants than tuna or salmon-derived oils.":
    "秘鲁小凤尾鱼——天然低汞,污染物显著低于金枪鱼或三文鱼来源鱼油。",
  "IFOS 5-Star Verified": "IFOS 五星认证",
  "Every batch independently tested by IFOS for potency, purity, oxidation and contaminants — and consistently exceeds label.":
    "每批次由 IFOS 独立检测效价、纯度、氧化与污染物,且持续优于标签声明。",
  "Built for Daily, Long-Term Nutritional Care": "为每日长期营养守护而生",
  "Adults focused on cardiovascular and lipid management": "关注心血管与血脂管理的成人",
  "Long hours of mental work or high cognitive demand": "长时间脑力工作或高认知需求人群",
  "Active lifestyles, athletes and those with joint discomfort":
    "活力生活方式、运动员与关节不适人群",
  "Anyone who rarely eats oily deep-sea fish (salmon, sardine, mackerel)":
    "很少食用油性深海鱼(三文鱼、沙丁鱼、鲭鱼)的人群",
  "Adults 40+ committed to long-term vascular and brain wellness":
    "40 岁以上,致力于长期血管与大脑健康者",
  "Families seeking a clean, IFOS-verified daily omega-3":
    "希望选择纯净、IFOS 认证日常 Omega-3 的家庭",
  "Vavitas Fish Oil sets a new bar for the category — pairing 700 mg of high-purity Omega-3 with the complete EPA · DHA · DPA trio in a single low-oxidation softgel. Sourced from cold Peruvian deep-sea anchovies, manufactured in a US FDA-registered, NSF-certified facility, and IFOS 5-Star verified for purity, potency and freshness — the most rigorously tested way to support lifelong heart, brain and vascular wellness.":
    "Vavitas 鱼油重新定义品类——在单粒低氧化软胶囊中,集合 700mg 高纯度 Omega-3 与完整 EPA · DHA · DPA 三重组合。源自寒冷秘鲁深海凤尾鱼,于美国 FDA 注册、NSF 认证工厂生产,并通过 IFOS 五星纯度、效价与新鲜度认证——是守护终生心脏、大脑与血管健康最严苛的选择。",
  "Omega-3 Daily": "每日 Omega-3",
  "Complete Trio": "完整三重",
  "5-Star Verified": "五星认证",

  // -------- NMN --------
  "NMN 101 · The Science of Healthy Longevity": "NMN 101 · 健康长寿的科学",
  "Replenishing the Cellular Currency of Youth": "重新充注细胞中的青春能量货币",
  "NMN (β-Nicotinamide Mononucleotide) is the most efficient direct precursor to NAD⁺ — a coenzyme essential for energy metabolism, DNA repair and cellular vitality. As we age, NAD⁺ levels decline sharply. Vavitas NMN is engineered to restore them, drawing on decades of pioneering research from the world's leading longevity scientists.":
    "NMN(β-烟酰胺单核苷酸)是 NAD⁺ 最高效的直接前体——一种对能量代谢、DNA 修复与细胞活力至关重要的辅酶。随年龄增长,NAD⁺ 水平急剧下降。Vavitas NMN 汲取全球顶尖长寿科学家数十年的先锋研究,为重塑 NAD⁺ 水平而设计。",
  "Step 01": "第 01 步",
  "Step 02": "第 02 步",
  "Step 03": "第 03 步",
  "NMN Intake": "摄入 NMN",
  "A natural B3-derived molecule found in broccoli, avocado and edamame — but only in trace amounts. Oral NMN is highly bioavailable in humans.":
    "天然 B3 衍生分子,在西兰花、牛油果与毛豆中存在但含量极低。口服 NMN 在人体中具有高生物利用率。",
  "Conversion": "转化",
  "Converts to NAD⁺": "转化为 NAD⁺",
  "Of all NAD⁺ precursors (NA, NAM, NR, NMN), NMN is the most efficient — converted in a single enzymatic step to fuel every cell in the body.":
    "在所有 NAD⁺ 前体(NA、NAM、NR、NMN)中,NMN 效率最高——仅需一步酶促转化,即可为全身细胞供能。",
  "Cellular Renewal": "细胞焕新",
  "NAD⁺ powers mitochondrial energy, sirtuin activation, DNA repair and cell revitalization — the biological foundations of healthy aging.":
    "NAD⁺ 驱动线粒体能量、激活去乙酰化酶、修复 DNA 与细胞复苏——这是健康老去的生物基础。",
  "Nicotinamide Riboside (NR)": "烟酰胺核糖(NR)",
  "The Indirect Path": "间接路径",
  "An earlier-generation NAD⁺ precursor. NR must first be converted into NMN inside the cell before it can become NAD⁺ — adding an extra enzymatic step and reducing efficiency along the way.":
    "上一代 NAD⁺ 前体。NR 必须先在细胞内被转化为 NMN,才能进一步生成 NAD⁺ ——多一步酶促,效率随之下降。",
  "β-Nicotinamide Mononucleotide (NMN)": "β-烟酰胺单核苷酸(NMN)",
  "The Direct Precursor": "直接前体",
  "single enzymatic step": "单步酶促转化",
  "The Cellular Journey": "细胞之旅",
  "From a Single Capsule": "从一粒胶囊",
  "to Every Cell in Your Body": "抵达体内每一个细胞",
  "Trace NMN's path — absorbed in minutes, converted in a single enzymatic step, and delivered as NAD⁺ to power the body's most vital biological systems.":
    "追溯 NMN 的旅程——数分钟内被吸收、单步酶促转化为 NAD⁺,为身体最关键的生物系统持续供能。",
  "T+0 min": "T+0 分",
  "T+15 min": "T+15 分",
  "T+30 min": "T+30 分",
  "Continuous": "持续",
  "Oral Intake": "口服摄入",
  "A single Vavitas capsule delivers pharmaceutical-grade β-NMN — bypassing the trace amounts found in food.":
    "一粒 Vavitas 胶囊提供医药级 β-NMN ——远超食物中的微量水平。",
  "Rapid Absorption": "快速吸收",
  "Specialized Slc12a8 transporters in the small intestine usher NMN into the bloodstream within minutes.":
    "小肠内的专属 Slc12a8 转运体在数分钟内将 NMN 送入血液。",
  "NAD⁺ Conversion": "NAD⁺ 转化",
  "Inside every cell, NMN is converted to NAD⁺ in a single enzymatic step by NMNAT — the most efficient pathway known.":
    "在每个细胞内,NMN 经 NMNAT 一步酶促转化为 NAD⁺ ——已知最高效路径。",
  "NAD⁺ activates sirtuins, fuels mitochondria, repairs DNA — the biochemical foundation of healthy aging.":
    "NAD⁺ 激活去乙酰化酶、驱动线粒体、修复 DNA ——健康老去的生化基础。",
  "Precursor": "前体",
  "NMNAT enzyme": "NMNAT 酶",
  "single step": "单步",
  "Cellular Fuel": "细胞燃料",
  "Outcomes": "成效",
  "Where Restored NAD⁺ Goes to Work": "重新充注的 NAD⁺ 在哪里发挥作用",
  "The science you can feel — in the moments that make a life.":
    "科学,可被感受——在那些构成生活的真实时刻。",
  "Brain": "大脑",
  "Quiet focus": "宁静专注",
  "Cognitive clarity & neuronal repair": "思维清晰与神经元修复",
  "Heart": "心脏",
  "Active years": "活力岁月",
  "Cardiovascular endurance": "心血管耐力",
  "Muscle": "肌肉",
  "Daily movement": "日常活动",
  "Mitochondrial energy output": "线粒体能量输出",
  "Skin & Cells": "肌肤与细胞",
  "Sun-kissed glow": "阳光焕亮",
  "DNA repair & regeneration": "DNA 修复与再生",
  "The NMN → NAD⁺ pathway: from a single capsule, through the bloodstream, into every mitochondrion — restoring the cellular currency of youth.":
    "NMN → NAD⁺ 路径:从一粒胶囊,经血流,抵达每一颗线粒体——重新充注青春的细胞能量货币。",
  "The Aging Equation": "衰老方程式",
  "By 60, NAD⁺ Falls to Half of Young-Adult Levels": "到 60 岁,NAD⁺ 仅剩青壮年时的一半",
  "Decades of research confirm that NAD⁺ depletion is a hallmark of aging — directly linked to fatigue, metabolic slowdown, cardiovascular decline and cognitive changes. Restoring NAD⁺ has become one of the most promising frontiers in longevity science.":
    "数十年研究证实,NAD⁺ 衰减是衰老的标志——与疲劳、代谢减慢、心血管下降与认知变化直接相关。重塑 NAD⁺ 已成为长寿科学最具前景的前沿之一。",
  "Age 20": "20 岁",
  "Age 40": "40 岁",
  "Age 60": "60 岁",
  "Morning run · peak vitality preserved": "晨跑 · 巅峰活力",
  "Career & self-care · sustaining clarity": "事业与自我关照 · 保持清晰",
  "Active longevity · replenishing each day": "活力长寿 · 每日重塑",
  "Vavitas NMN 300mg · delayed-release intervention point":
    "Vavitas NMN 300mg · 延释干预点",
  "Standing on the Shoulders of Giants": "站在巨人的肩膀上",
  "The Scientists Who Discovered NMN's Potential": "发掘 NMN 潜力的科学家们",
  "Modern NMN science was built by two visionaries whose work redefined what's possible in human longevity research.":
    "现代 NMN 科学由两位远见卓识的学者奠定,他们的工作重新定义了人类长寿研究的可能。",
  "Pioneer of NMN Biology": "NMN 生物学先驱",
  "Prof. Shin-ichiro Imai": "今井真一郎 教授",
  "Washington University School of Medicine": "圣路易斯华盛顿大学医学院",
  "His 2016 landmark study showed long-term NMN administration significantly slowed age-associated decline in mice — establishing NMN as a credible target for human longevity intervention.":
    "他在 2016 年的里程碑研究显示,长期补充 NMN 显著减缓小鼠的年龄相关衰退,确立了 NMN 作为人类长寿干预的可信靶点。",
  "Established the NMN → NAD⁺ → Sirtuin pathway as a key longevity-related metabolic axis":
    "确立 NMN → NAD⁺ → Sirtuin 通路为关键的长寿相关代谢轴",
  "Identified NMN absorption and transport mechanisms in the body":
    "阐明 NMN 在体内的吸收与转运机制",
  "Demonstrated NMN improves age-related metabolic functions (animal studies)":
    "证明 NMN 可改善年龄相关代谢功能(动物实验)",
  "Founding Scientist": "奠基科学家",
  "Imai defined the science.": "今井奠定了这门科学。",
  "Architect of Longevity Science": "长寿科学的建构者",
  "Prof. David A. Sinclair": "David A. Sinclair 教授",
  "Harvard Medical School": "哈佛医学院",
  "His work on sirtuins and NAD⁺-boosting molecules reframed aging as a treatable biological process — and his bestseller":
    "他对去乙酰化酶与提升 NAD⁺ 分子的研究,将衰老重塑为可干预的生物过程——其畅销书",
  "brought NMN to global audiences.": "将 NMN 带给全球读者。",
  "Why We Age — and Why We Don't Have To": "我们为何衰老——以及为何无需如此",
  "International Bestseller": "国际畅销书",
  "Established that declining NAD⁺ is a key driver of aging":
    "确立 NAD⁺ 衰减是衰老的关键驱动力",
  "Elevated NMN to global prominence through research and personal advocacy":
    "通过研究与个人倡导将 NMN 推向全球关注",
  "Advanced clinical translation and commercialization of NMN":
    "推进 NMN 的临床转化与商业化",
  "Global Visionary": "全球远见者",
  "Sinclair brought NMN to the world.": "Sinclair 将 NMN 带向世界。",
  "The Vavitas × AbinoNutra® Standard": "Vavitas × AbinoNutra® 标准",
  "Clinically Validated NMN.": "经临床验证的 NMN。",
  "Proven in Humans.": "于人体中验证。",
  "NUS Healthy Longevity Centre": "新加坡国立大学健康长寿中心",
  "National University of Singapore": "新加坡国立大学",
  "The Landmark Trial with Prof. Andrea Maier": "与 Andrea Maier 教授的里程碑试验",
  "Advanced human clinical trials of NMN": "推进 NMN 的人体临床试验",
  "Confirmed NAD⁺ elevation and safety": "确认 NAD⁺ 提升与安全性",
  "Enabled the shift from lab research to clinical application":
    "实现从实验室研究到临床应用的跨越",
  "Clinical Translator": "临床转化者",
  "She made NMN a clinically relevant intervention in human medicine.":
    "她让 NMN 成为人类医学中具临床意义的干预方案。",
  "Inside our cGMP research laboratories — where every batch of AbinoNutra® NMN is tested for purity and potency.":
    "走进我们的 cGMP 研究实验室——每一批 AbinoNutra® NMN 都经过纯度与效价检测。",
  "CSO & Scientific Team": "首席科学家与科研团队",
  "A Decade of NMN Innovation": "十年 NMN 创新",
  "Our Chief Scientific Officer leads a US-based research team that has been advancing NMN since 2020 — pioneering scalable, high-purity manufacturing, achieving SA-GRAS recognition, and driving the regulatory progress that returned NMN to the U.S. market under FDA review.":
    "我们的首席科学家带领美国本土研究团队,自 2020 年起持续推进 NMN——开创可规模化的高纯度生产、获得 SA-GRAS 认可,并推动 NMN 在 FDA 审议下重返美国市场。",
  "Ongoing Global Research": "持续的全球研究",
  "Four Active Trials Across Three Countries": "横跨三国的四项进行中试验",
  "Beyond the published GeroScience study, our team is currently conducting four additional human clinical trials in Singapore, Japan and Taiwan — exploring NMN's diverse applications in physical performance, metabolic health and biological-age reversal.":
    "在已发表于 GeroScience 的研究之外,团队正在新加坡、日本与台湾开展四项人体临床试验——探索 NMN 在体能、代谢健康与生物年龄逆转中的多元应用。",
  "For Those Who Refuse to Slow Down": "献给不愿放慢脚步的人",
  "Adults 40+ proactively investing in healthy longevity": "40 岁以上、主动投资健康长寿的人群",
  "Performance-focused individuals seeking sustained cellular energy":
    "追求持续细胞能量、注重表现的人群",
  "Those experiencing age-related fatigue or metabolic slowdown":
    "感受到年龄相关疲劳或代谢减慢的人群",
  "Anyone interested in evidence-based biological-age management":
    "关注循证生物年龄管理的人群",
  "Health-conscious consumers who demand pharmaceutical-grade purity":
    "对医药级纯度有要求的健康消费者",
  "Quality Assurance": "品质保证",
  "What Makes Vavitas NMN Different": "Vavitas NMN 的独特之处",
  "AbinoNutra® award-winning NMN ingredient": "AbinoNutra® 屡获殊荣的 NMN 原料",
  "US FDA-registered, cGMP-certified manufacturing": "美国 FDA 注册、cGMP 认证生产",
  "≥99% chemical and optical purity": "化学与光学纯度 ≥99%",
  "SA-GRAS recognized by FDA-accredited experts": "经 FDA 认可专家给予 SA-GRAS 认定",
  "Delayed-release capsule for optimal bioavailability": "延释胶囊以优化生物利用率",
  "Validated by published human clinical data": "经已发表人体临床数据验证",
  "the Clinically Validated Choice": "经临床验证的选择",
  "Vavitas formulates with AbinoNutra® NMN — an award-winning, pharmaceutical-grade β-Nicotinamide Mononucleotide produced under US FDA-registered cGMP standards and validated through published human clinical trials. The result: ≥99% chemical and optical purity, SA-GRAS recognition, and a delayed-release capsule engineered for maximum cellular bioavailability.":
    "Vavitas 选用 AbinoNutra® NMN ——获奖的医药级 β-烟酰胺单核苷酸,于美国 FDA 注册的 cGMP 标准下生产,并通过已发表的人体临床试验验证。其结果:≥99% 化学与光学纯度、获 SA-GRAS 认定、延释胶囊以最大化细胞生物利用率。",
  "Purity": "纯度",
  "FDA-Registered": "FDA 注册",
  "Blood NAD⁺ elevation": "血液 NAD⁺ 提升",
  "over baseline (600 mg)": "(相较基线,600 mg)",
  "Years biological age": "生物年龄年数",
  "reduction (600 mg group)": "下降(600 mg 组)",
  "Chemical & optical": "化学与光学",
  "purity verified": "纯度验证",

  // -------- Global Certifications --------
  "Global Certifications": "全球认证",
  "Trusted Across": "信赖之名,跨越",
  "Three Continents": "三大洲",
  "VAVITAS facilities in the United States, Germany, and Japan all operate under the world's most stringent pharmaceutical quality standards.":
    "VAVITAS 在美国、德国与日本的合作工厂,均遵循全球最严苛的医药级品质标准。",
  "United States": "美国",
  "Germany": "德国",
  "Japan": "日本",
  "Bactolac Pharmaceutical — Hauppauge, New York": "Bactolac Pharmaceutical · 美国纽约州 Hauppauge",
  "Gelita AG Headquarters — Eberbach, Baden-Württemberg":
    "Gelita AG 总部 · 德国巴登-符腾堡州 Eberbach",
  "Kaneka Corporation Headquarters — Osaka, Japan": "Kaneka 株式会社总部 · 日本大阪",
  "FDA Registered": "FDA 注册",
  "NSF / GMP": "NSF / GMP",
  "cGMP Certified": "cGMP 认证",
  "EU-GMP Certified": "EU-GMP 认证",
  "ISO 22000": "ISO 22000",
  "IFS Food Standard": "IFS 食品标准",
  "GMP Certified": "GMP 认证",
  "Halal Certified": "清真认证",
  "Pharmaceutical-grade manufacturing under FDA oversight, ensuring every batch meets strict cGMP standards.":
    "在 FDA 监管下的医药级生产,确保每批次均符合严格 cGMP 标准。",
  "European pharmaceutical excellence with rigorous EU-GMP protocols and full traceability of every ingredient.":
    "欧洲医药级卓越制造,严苛 EU-GMP 流程,每一原料均可全程追溯。",
  "Precision Japanese craftsmanship — patented yeast-fermentation technology with the highest standards of purity, potency, and clinical validation.":
    "精密日本制造工艺——专利酵母发酵技术,以最高纯度、效价与临床验证标准呈现。",
  "In partnership with Bactolac Pharmaceutical, Inc.": "与 Bactolac Pharmaceutical, Inc. 合作",
  "In partnership with Gelita AG": "与 Gelita AG 合作",
  "In partnership with Kaneka Corporation": "与 Kaneka 株式会社合作",
  "Founded 1995 · Hauppauge, New York · Large-scale Contract Manufacturer":
    "成立于 1995 年 · 纽约州 Hauppauge · 大型代工制造商",
  "Family-owned since 1875 · Global leader in collagen & gelatin":
    "1875 年家族企业 · 全球胶原与明胶领导者",
  "Founded 1949 · Osaka · Global leader in functional ingredients":
    "成立于 1949 年 · 大阪 · 全球功能性原料领导者",
  "One of the largest U.S. contract manufacturers of dietary supplements, Bactolac offers full-service R&D, manufacturing, and private-label services across diverse dosage forms — operating cGMP-certified, FDA-registered facilities.":
    "美国最大的膳食补充剂代工厂之一,Bactolac 提供从研发、生产到自有品牌的全流程服务,覆盖多种剂型,工厂均通过 cGMP 认证并经 FDA 注册。",
  "With ~3,000 employees and operations in 20+ countries, Gelita supplies pharmaceutical-grade collagen peptides and gelatin to the world's most demanding food, nutrition, and pharmaceutical brands — backed by industry-leading R&D and quality systems.":
    "Gelita 拥有约 3,000 名员工、业务遍及 20 余国,为全球最具要求的食品、营养与制药品牌提供医药级胶原肽与明胶,具备行业领先的研发与品质体系。",
  "A publicly listed Japanese chemicals & life-sciences company, Kaneka is the inventor and global benchmark for Ubiquinol® — the reduced, bio-active form of CoQ10 — produced via patented yeast fermentation and validated by extensive clinical research.":
    "Kaneka 为日本上市化工与生命科学公司,是 Ubiquinol®(辅酶 Q10 还原型生物活性形式)的发明者与全球标杆,采用专利酵母发酵工艺,并经大量临床研究验证。",
  "VAVITAS® Collagen Peptide": "VAVITAS® 胶原肽",
  "VERISOL® Stick Packs": "VERISOL® 条状包装",
  "Skin, Hair, Nail + Joint support — clinically studied bioactive collagen peptide stick packs.":
    "肌肤、头发、指甲 + 关节支持——临床研究的生物活性胶原肽条状装。",
  "VAVITAS® Ubiquinol": "VAVITAS® 还原型辅酶 Q10",
  "Active CoQ10 · 100mg": "活性 CoQ10 · 100mg",
  "Superior absorption softgels — the active form of CoQ10 for heart & cellular energy.":
    "卓越吸收软胶囊——活性辅酶 Q10,守护心脏与细胞能量。",
  "Beauty from Within — clinically studied bioactive collagen peptides for skin elasticity.":
    "由内而美——临床研究的生物活性胶原肽,提升肌肤弹性。",
  "Bioactive Collagen Peptides®": "生物活性胶原肽 Bioactive Collagen Peptides®",
  "Trusted Science — targeted BCP® portfolio for joints, bones, muscles & beauty.":
    "可信赖的科学——针对关节、骨骼、肌肉与美容的 BCP® 产品组合。",
  "Kaneka Ubiquinol®": "Kaneka Ubiquinol®",
  "The reduced, bioactive form of CoQ10 — patented yeast-fermentation, clinically validated for cellular energy.":
    "辅酶 Q10 的还原型生物活性形式——专利酵母发酵,临床验证支持细胞能量。",
  "Kaneka Q10™": "Kaneka Q10™",
  "The global benchmark CoQ10 ingredient — premium purity for heart & cellular health supplements.":
    "全球标杆 CoQ10 原料——优质纯度,适用于心脏与细胞健康补充剂。",
  "Manufacturing Partner": "制造合作伙伴",
  "Flagship Products": "旗舰产品",
  "Flagship Product Brands": "旗舰产品品牌",
  "Official Site": "官方网站",

  // -------- Utility pages --------
  "Your cart is currently empty": "您的购物车目前为空",
  "It looks like you haven't added any items yet. Start exploring our premium supplements.":
    "您还未添加任何商品。开始探索我们的高端营养补充剂吧。",
  "Continue Shopping": "继续购物",
  "Return to Home": "返回首页",
  "Thank You!": "感谢您!",
  "Your order has been successfully confirmed and is being processed.":
    "您的订单已成功确认,正在处理中。",
  "Oops! Page not found": "页面未找到",

  // -------- Addendum: split fragments & supplementary keys (zh-CN) --------
  "Vitamin D3": "维生素 D3",
  "K2 as MK-7": "K2(MK-7)",
  "Daily softgel": "每日软胶囊",
  "EPA·DHA·DPA": "EPA·DHA·DPA",
  "High-Purity Omega-3 — Engineered for Lifelong Heart, Brain &amp; Vessel Health":
    "高纯度 Omega-3 — 为心、脑、血管的终身健康而设计",
  "Modern diets fall short on the marine omega-3s the body cannot make. Vavitas pairs":
    "现代饮食难以提供身体无法自行合成的海洋 Omega-3。Vavitas 在每粒软胶囊中搭配",
  "per softgel with a": "搭配",
  "DPA-enriched EPA · DHA · DPA": "DPA 强化的 EPA · DHA · DPA",
  "profile — the complete trio that supports cardiovascular, cognitive, and vascular wellness, batch after batch.":
    "组合——支持心血管、认知与血管健康的完整三联体,批次始终如一。",
  "700 mg of Omega-3": "700 毫克 Omega-3",
  "in a single softgel — molecularly distilled from small Peruvian deep-sea anchovies, low-oxidation controlled, and IFOS-tested. The DPA upgrade supports lipid metabolism up to":
    "于单粒软胶囊中——分子蒸馏自秘鲁深海凤尾鱼,严控低氧化,IFOS 检测。DPA 升级可使脂质代谢效率提升达",
  "10–20× more effectively": "10–20 倍",
  "than EPA alone.": "(相较单独 EPA)。",
  "Refined diets, busy lifestyles and shrinking deep-sea fish intake leave most adults chronically short on EPA, DHA and DPA. Vavitas concentrates a clinically meaningful":
    "精制饮食、忙碌生活与深海鱼摄取减少,使大多数成年人长期缺乏 EPA、DHA 与 DPA。Vavitas 在单粒软胶囊中浓缩临床有效剂量",
  "into one softgel — the daily level supported by global cardiology guidance for sustained cardiovascular and cognitive resilience.":
    "——这正是全球心脏病学指南所支持的日常摄入水平,持续守护心血管与认知力。",
  "EPA and DHA are the omega-3s most people know — but DPA is the missing partner. DPA binds rapidly with phospholipids and crosses cellular barriers more efficiently than EPA alone. Independent research suggests DPA can support lipid metabolism":
    "EPA 与 DHA 是大众熟知的 Omega-3,但 DPA 才是被忽略的伙伴。DPA 与磷脂结合迅速,穿越细胞屏障的效率高于单独 EPA。独立研究显示,DPA 支持脂质代谢的效率可达",
  "than EPA — a meaningful upgrade for long-term cardiovascular and vessel health.":
    "(相较 EPA),为长期心血管与血管健康带来重要升级。",
  "*IFOS-verified composition consistently exceeds the declared 25 mg DPA — typically &gt;50 mg per softgel.":
    "*IFOS 验证显示成分稳定超出标示 25 毫克 DPA,通常每粒软胶囊 > 50 毫克。",
  "Over a billion people worldwide are vitamin D insufficient. But D3 alone isn't enough. Vavitas pairs":
    "全球超过 10 亿人维生素 D 不足。但单靠 D3 远远不够。Vavitas 将",
  "5000IU D3": "5000IU D3",
  "with": "与",
  "100mcg K2 (MK-7)": "100 微克 K2(MK-7)",
  "— the missing partner that directs calcium where it belongs: into bones and teeth, not arteries.":
    "——这一缺失的伙伴,把钙引导到它该去的地方:骨骼与牙齿,而非动脉。",
  "Indoor work, sunscreen, latitude, age and skin tone all dramatically reduce the body's ability to synthesize vitamin D from sunshine. The result: nearly 1 in 2 adults are insufficient. Vavitas delivers a clinically meaningful":
    "室内工作、防晒、纬度、年龄与肤色都会大幅降低身体从阳光合成维生素 D 的能力。结果是:近 1/2 的成年人维生素 D 不足。Vavitas 提供具有临床意义的剂量",
  "daily — the level supported by leading endocrinology research for sustained sufficiency.":
    "每日——这是顶尖内分泌研究所支持的、可维持长期充足的剂量水平。",
  "Bone density peaks in your late 20s, then steadily declines — especially after menopause and andropause. Meanwhile, arterial calcification quietly accelerates with age. The D3+K2 pairing is the only nutritional duo proven to support":
    "骨密度在 20 多岁达到顶峰后逐年下降——尤其在女性更年期与男性雄激素衰退期之后。与此同时,动脉钙化随年龄悄然加剧。D3+K2 的组合是唯一在营养学上同时支持",
  "both": "两端",
  "ends of this equation, helping preserve skeletal strength while keeping vascular tissue supple.":
    "的方案——既维持骨骼力量,也保持血管柔韧。",
  "The reduced, active antioxidant form your body uses immediately. Up to":
    "身体可立即使用的还原型活性抗氧化形式。生物利用率可达",
  "than standard CoQ10 — directly supporting cellular energy and free-radical defense.":
    "——相较普通辅酶 Q10,直接支持细胞能量与抵御自由基。",
  "Vavitas NMN is formulated with": "Vavitas NMN 采用",
  "AbinoNutra® NMN": "AbinoNutra® NMN",
  "— the award-winning ingredient produced in a US FDA-registered, cGMP facility with chemical and optical purity exceeding":
    "——这一获奖原料,产自美国 FDA 注册的 cGMP 工厂,化学与光学纯度超过",
  ". It is one of the only NMN ingredients in the world validated in a published, gold-standard human clinical trial.":
    "。它是全球极少数通过已发表的金标准人体临床试验验证的 NMN 原料之一。",
  "The most efficient direct precursor to NAD⁺ — converted in a":
    "NAD⁺ 最高效的直接前体——仅需",
  "by NMNAT. Larger and more bioactive than NR, NMN delivers cellular fuel exactly where the body needs it.":
    "由 NMNAT 转化即可。分子较 NR 更大且更具生物活性,把细胞燃料精准送达。",
  "In partnership with": "合作伙伴:",
  "Professor Andrea Maier": "Andrea Maier 教授",
  ", Director of the Centre for Healthy Longevity at the National University of Singapore, our team conducted one of the largest randomized, double-blinded, placebo-controlled human trials on NMN. Published in":
    "(新加坡国立大学健康长寿研究中心主任)与我们的团队共同开展了 NMN 领域规模最大的随机、双盲、安慰剂对照人体试验之一,成果发表于",
  "GeroScience": "GeroScience 期刊",
  "(2023) and awarded": "(2023),并荣获",
  "3rd Prize by the American Aging Association (AGE)": "美国老龄化协会(AGE)三等奖",
  "in 2024.": "(2024)。",
  "Source: Rajman, Chwalek, Sinclair.": "数据来源:Rajman、Chwalek、Sinclair。",
  "Replenish": "补充",
  "NAD⁺ here": "细胞内 NAD⁺",
  "Lifespan": "寿命",
  "Longevity": "长寿",
  "Cell Metabolism": "细胞代谢",
  "Energy · Repair": "能量 · 修复",
  "Harvard Med": "哈佛医学院",
  "WashU Medicine": "华盛顿大学医学院",
  "Deep-Sea Omega-3": "深海 Omega-3",
  "D3 + K2": "D3 + K2",

  // -------- Product card subtitles & taglines --------
  "1000mg · 700mg Omega-3": "1000mg · 700mg Omega-3",
  "5000IU + 100mcg": "5000IU + 100mcg",
  "300mg · Delayed Release": "300mg · 缓释胶囊",
  "CoQ10 · 100mg · Superior Absorption": "CoQ10 · 100mg · 卓越吸收",
  "VERISOL® Bioactive Peptide": "VERISOL® 生物活性肽",
  "Supports Heart, Brain & Immune Health*": "支持心脏、大脑与免疫健康*",
  "Supports Bone Strength & Calcium Absorption*": "支持骨骼强健与钙吸收*",
  "Supports Cellular Energy & Healthy Aging*": "支持细胞能量与健康衰老*",
  "Supports Heart Health & Cellular Energy*": "支持心脏健康与细胞能量*",
  "Supports Skin Elasticity & Joint Health*": "支持肌肤弹性与关节健康*",

  // -------- Partnerships section --------
  "Partnership Opportunities": "合作机会",
  "Partner with VAVITAS — Building a Future of Science-Driven Health Together": "与 VAVITAS 携手，共创科学健康未来",
  "We connect science, healthcare, and community to advance evidence-based nutrition solutions that support long-term health and quality of life.":
    "我们致力于连接科学、医疗与社区，共同探索基于证据的营养解决方案，助力长期健康与高质量生活。",
  "Research & Strategic Partnerships": "科研与战略合作",
  "Collaborating with researchers, longevity experts, and institutions to advance evidence-based nutrition and healthy aging.":
    "与科研机构、大学实验室、长寿医学专家及健康组织共同推动营养科学创新与健康老化研究。",
  "Clinics & Wellness Centers": "诊所与健康中心",
  "Providing science-informed nutritional solutions for functional medicine clinics, wellness centers, healthy aging and senior care organizations, and health professionals.":
    "为功能医学诊所、健康中心、老年健康与康养机构及健康专业人士提供科学营养解决方案。",
  "Community Health Partnerships": "社区健康合作",
  "Working with community organizations to promote lifelong wellness and health education.":
    "与社区组织、健康教育项目及公益机构共同促进长期健康管理。",
  "Brand & Innovation Partnerships": "品牌与创新合作",
  "Partnering with like-minded organizations to create innovative health solutions.":
    "欢迎具有共同理念的品牌伙伴探索联合创新与长期合作机会。",
  "Let's Build Together": "携手共建",
  "Start a Partnership Conversation": "开启合作对话",
  "Whether you are seeking business partnerships, professional wellness collaborations, or strategic alliances, VAVITAS looks forward to becoming your trusted long-term partner.":
    "无论您寻求业务合作、专业健康合作还是战略合作，VAVITAS 都期待成为您值得信赖的长期合作伙伴。",
  "Science-driven formulas with premium ingredients": "科学驱动配方与优质原料",
  "US-manufactured to rigorous quality standards": "美国生产，严谨质量标准",
  "Flexible and efficient global partnership models": "灵活高效的全球合作模式",
  "End-to-end support from a dedicated team": "专属团队提供全程支持",
  "First Name": "名字",
  "Last Name": "姓氏",
  "Business Email": "商务邮箱",
  "Company / Organization": "公司 / 机构",
  "Website": "公司网址",
  "Phone Number": "联系电话",
  "Country / Region": "国家 / 地区",
  "Partnership Interest": "合作意向",
  "Message": "留言",
  "Select country / region…": "请选择国家 / 地区…",
  "Search country…": "搜索国家…",
  "No country found.": "未找到匹配的国家。",

  "Select an option…": "请选择一项…",
  "Tell us about your organization, target market, and the type of partnership you are interested in.":
    "请简要介绍贵机构、目标市场,以及您感兴趣的合作类型。",
  "Wholesale / Retail": "批发 / 零售",
  "Clinic / Wellness Center Partnership": "诊所 / 健康中心合作",
  "Private Label / White Label": "自有品牌 / 白标",
  "Distribution": "分销代理",
  "Scientific / Strategic Collaboration": "科研 / 战略合作",
  "Research & Strategic Collaboration": "科研与战略合作",
  "Clinics, Wellness & Senior Care Partnership": "诊所、健康与康养机构合作",
  "Community Health & Education Partnership": "社区健康与教育合作",
  "Brand & Product Innovation Partnership": "品牌与产品创新合作",
  "Business & Market Collaboration": "商业与市场合作",
  "Other Partnership Inquiries": "其他合作咨询",
  "Other": "其他",
  "Submit Partnership Inquiry": "提交合作咨询",
  "Submitted — Thank You": "已提交 — 感谢您",
  "By submitting, you agree to be contacted by the VAVITAS partnerships team regarding your inquiry.":
    "提交即表示您同意 VAVITAS 合作团队就您的咨询与您联系。",
  "Missing information": "信息不完整",
  "Please complete all required fields before submitting.": "提交前请填写所有必填字段。",
  "Inquiry received": "已收到您的咨询",
  "Thank you. Your partnership inquiry has been received. Our team will review your message and get back to you shortly.":
    "感谢您。我们已收到您的合作咨询,团队将尽快审阅您的留言并与您联系。",
};

// ============================================================
// Traditional Chinese (zh-TW)
// ============================================================
export const deepZhTW: Dict = {
  // -------- Common --------
  "The Vavitas Standard": "Vavitas 標準",
  "Vavitas brand mark": "Vavitas 品牌標識",
  "Who It's For": "適合人群",
  "Why Vavitas Fish Oil": "為何選擇 Vavitas 魚油",
  "Why Vavitas D3 + K2": "為何選擇 Vavitas D3 + K2",
  "Engineered for Performance, Verified for Safety": "性能領先 · 安全可驗證",
  "Manufactured in the USA": "美國生產",
  "Sunlight on every continent. One promise of life.": "陽光遍灑每一片大陸，守護生命的同一承諾。",
  "Globally Sourced · Ethically Crafted · Universally Trusted": "全球甄選 · 匠心製造 · 普世信賴",
  "From the sunlit fields and pristine seas of our partner growers, to families across every continent — Vavitas honors the responsibility of protecting human vitality with master-crafted nutrition for all peoples, all generations.": "從合作種植者陽光下的田野與純淨海洋，到遍及每一片大陸的家庭——Vavitas 以匠心打造的營養，肩負守護全人類、世代生命活力的責任。",
  "Per softgel": "每粒軟膠囊",
  "Better absorption": "吸收更佳",
  "Trusted quality": "值得信賴的品質",
  "Bioavailable": "生物利用率",
  "Fermented": "發酵工藝",
  "Clinical dose": "臨床劑量",
  "Visible results": "可見效果",

  // -------- Ubiquinol --------
  "Ubiquinol 101 · Powered by Kaneka Ubiquinol®": "輔酶 Q10 還原型 101 · 由 Kaneka Ubiquinol® 提供",
  "The Active Form of CoQ10 Your Cells Can Use Immediately":
    "細胞可直接利用的輔酶 Q10 活性形式",
  "CoQ10 fuels every cell in your body — but as we age, our ability to convert it into its usable form declines. Vavitas Ubiquinol delivers the body-ready form directly, so your heart, brain and muscles get the energy and antioxidant protection they need.":
    "輔酶 Q10 為體內每個細胞供能,但隨著年齡增長,身體將其轉化為可用形式的能力逐漸下降。Vavitas Ubiquinol 直接提供人體可立即使用的形式,為心臟、大腦和肌肉帶來所需的能量與抗氧化保護。",
  "Ubiquinone": "氧化型(Ubiquinone)",
  "The Raw Material": "原始形態",
  "The oxidized form of CoQ10. Before your body can use it as an antioxidant, it must first convert ubiquinone into ubiquinol — a process that becomes less efficient as we age.":
    "輔酶 Q10 的氧化型。身體需先將其轉化為還原型(ubiquinol)才能作為抗氧化劑使用,而這一轉化效率會隨年齡下降。",
  "Ubiquinol": "還原型(Ubiquinol)",
  "The Finished Product": "活性成品",
  "8× more bioavailable": "生物利用率提升 8 倍",
  "Cellular Energy Engine": "細胞能量引擎",
  "Where Your Body's ATP Is Born": "ATP 能量的誕生之地",
  "Inside every cell, mitochondria turn the food you eat into ATP — the fuel that powers every heartbeat, thought and movement. Ubiquinol is essential to this energy chain, shuttling electrons that drive ATP production and neutralizing free radicals that damage your cells along the way.":
    "細胞內的粒線體將食物轉化為 ATP,為每一次心跳、思考與動作提供動力。Ubiquinol 在這一能量鏈中至關重要——既傳遞電子驅動 ATP 合成,也中和損傷細胞的自由基。",
  "Why Ubiquinol Matters": "為何 Ubiquinol 至關重要",
  "Four Reasons to Choose the Active Form": "選擇活性形式的四個理由",
  "Natural Decline With Age": "隨年齡自然下降",
  "After 40, the body's ability to convert ubiquinone into ubiquinol slows down — making the active form a smarter choice.":
    "40 歲後,身體將氧化型轉化為還原型的能力減弱,直接補充活性型更為明智。",
  "Superior Absorption": "卓越吸收",
  "Clinical studies show Ubiquinol is approximately 8× more bioavailable than standard CoQ10.":
    "臨床研究顯示,Ubiquinol 的生物利用率約為一般輔酶 Q10 的 8 倍。",
  "Antioxidant Power": "強力抗氧化",
  "The only form of CoQ10 that acts directly as an antioxidant, shielding cells from oxidative damage.":
    "唯一可直接發揮抗氧化作用的輔酶 Q10 形式,守護細胞免受氧化損傷。",
  "Energy Efficiency": "高效供能",
  "Already in the form your body needs — fueling the heart, brain and muscles that depend on mitochondrial activity.":
    "已是人體可直接使用的形式,為仰賴粒線體活動的心臟、大腦和肌肉持續供能。",
  "Heart Health Spotlight": "心臟健康聚焦",
  "A Tireless Muscle Demands Tireless Energy": "永不停歇的肌肉,需要永不停歇的能量",
  "The heart contains some of the highest concentrations of CoQ10 in the body — for good reason. It beats over 100,000 times a day, and every contraction depends on mitochondrial energy. Ubiquinol helps maintain the cellular fuel and antioxidant balance your cardiovascular system relies on.":
    "心臟是人體輔酶 Q10 濃度最高的器官之一——這並非偶然。每天約 10 萬次心跳的背後,皆仰賴粒線體能量。Ubiquinol 有助維持心血管系統所需的細胞能量與抗氧化平衡。",
  "*Statins and certain medications are known to deplete CoQ10 levels — talk to your healthcare provider if this applies to you.":
    "*已知他汀類等藥物會消耗體內輔酶 Q10——如適用,請諮詢您的醫師。",
  "Designed for the Lives You Want to Keep Living": "為你所珍視的生活方式而設計",
  "Adults 40+ supporting healthy aging from the cellular level":
    "40 歲以上,從細胞層面支持健康老化的族群",
  "People taking statins, which are known to deplete CoQ10":
    "服用他汀類等已知會消耗輔酶 Q10 藥物的族群",
  "Anyone focused on long-term heart and cardiovascular wellness":
    "重視長期心臟與心血管健康的族群",
  "Active individuals seeking sustained energy and recovery":
    "追求持續能量與高效恢復的運動族群",
  "Those experiencing fatigue or low daily energy":
    "經常感到疲勞或日常精力不足者",
  "Made with": "採用",
  "the World's Most Trusted Source": "全球最值得信賴的原料源頭",
  "Vavitas formulates with Kaneka Ubiquinol® — a patented ubiquinol ingredient and the active antioxidant form of CoQ10. Produced through Kaneka's proprietary yeast-fermentation process and manufactured at its U.S. facility, it's the same form recognized worldwide for its stability, purity and superior bioavailability — now delivered in our premium softgel for everyday use.":
    "Vavitas 選用 Kaneka Ubiquinol® ——專利還原型輔酶 Q10 成分,輔酶 Q10 的活性抗氧化形式。採用 Kaneka 獨有的酵母發酵工藝,於其美國工廠製造,以穩定性、純度與生物利用率享譽全球——現以高端軟膠囊,陪伴你的日常。",

  // -------- Collagen --------
  "Collagen 101 · Powered by VERISOL®": "膠原 101 · 由 VERISOL® 提供",
  "The Bioactive Collagen Peptide Clinically Proven for Skin, Hair & Nails":
    "經臨床驗證、針對肌膚·髮絲·指甲的生物活性膠原胜肽",
  "Collagen is the body's most abundant protein — the scaffolding behind firm skin, strong hair and resilient nails. After 25, our natural collagen production drops about 1% every year. Vavitas Collagen Peptides deliver VERISOL® — bioactive peptides specifically optimized to stimulate skin cell metabolism from within.":
    "膠原蛋白是人體含量最豐富的蛋白質——支撐緊緻肌膚、健康髮絲與堅韌指甲的核心結構。25 歲後,體內膠原以每年約 1% 的速度流失。Vavitas 膠原胜肽採用 VERISOL® ——經專門優化、可由內活化肌膚細胞代謝的生物活性胜肽。",
  "Generic Collagen": "一般膠原蛋白",
  "Undirected Protein": "缺乏靶向的蛋白",
  "Most collagen powders are generic hydrolyzed peptides — fragments of varying size that the body uses for general protein needs, with no clinical evidence of where they end up.":
    "市面多數膠原粉為通用水解膠原胜肽,大小不一,被身體當作一般蛋白消耗,缺乏作用部位的臨床證據。",
  "VERISOL® Bioactive Peptides": "VERISOL® 生物活性胜肽",
  "Targeted to Your Skin Cells": "精準靶向肌膚細胞",
  "Specifically optimized peptide sizes that stimulate fibroblasts in the skin —":
    "針對肌膚纖維母細胞優化的特定胜肽——",
  "clinically proven": "臨床證實",
  "to boost elasticity in 4 weeks and reduce wrinkle volume in 8 weeks.":
    "可於 4 週提升彈性,8 週減少皺紋體積。",
  "The Body's Scaffolding": "身體的支架",
  "Why Collagen Is the Protein That Holds Us Together": "膠原:讓我們渾然一體的蛋白",
  "Collagen makes up roughly 30% of all protein in the body — the structural matrix of skin, hair, nails, bones, joints and connective tissue. As natural production declines with age, supplementing with bioactive peptides helps replenish this essential scaffolding from the inside out.":
    "膠原約佔人體總蛋白質的 30%,是肌膚、髮絲、指甲、骨骼、關節與結締組織的結構基質。隨年齡增長合成下降,補充生物活性胜肽可由內重建這一關鍵支架。",
  "Why VERISOL® Matters": "為何 VERISOL® 重要",
  "Four Reasons to Choose Bioactive Peptides": "選擇生物活性胜肽的四個理由",
  "Skin Elasticity": "肌膚彈性",
  "Clinical studies show a significant increase in skin elasticity after just 4 weeks of daily use.":
    "臨床研究顯示,持續每日服用 4 週,肌膚彈性顯著提升。",
  "Wrinkle Reduction": "皺紋減少",
  "Measurable reduction in eye wrinkle volume after 8 weeks — supporting visibly smoother skin.":
    "8 週後眼周皺紋體積可測量地減少,肌膚更顯平滑。",
  "Hair & Nail Strength": "髮絲與指甲強健",
  "Stronger nail growth and reduced breakage, plus improved hair resilience and shine.":
    "指甲生長更牢固、不易斷裂,髮絲更具韌性與光澤。",
  "Joint & Connective Tissue": "關節與結締組織",
  "Supports the connective tissue that cushions joints and maintains mobility as you age.":
    "支持緩衝關節、維持靈活活動的結締組織。",
  "Beauty From Within": "由內而美",
  "Skincare That Works Where Topicals Can't Reach": "外用難以企及之處,由內護理",
  "Topical creams sit on the surface — but visible aging starts in the deeper dermal layer where collagen is produced. VERISOL® bioactive peptides travel through the bloodstream to fibroblasts, signalling them to produce new collagen, elastin and proteoglycans for firmer, more hydrated skin.":
    "外用乳霜停留於表層,但老化的起點在更深的真皮層——膠原合成之處。VERISOL® 生物活性胜肽經血流抵達纖維母細胞,激活新生膠原、彈性蛋白與蛋白聚醣,帶來更緊緻、更潤澤的肌膚。",
  "*Results based on randomized, double-blind, placebo-controlled clinical studies on VERISOL® bioactive collagen peptides.":
    "*結果基於針對 VERISOL® 生物活性膠原胜肽的隨機、雙盲、安慰劑對照臨床研究。",
  "For Everyone Who Wants to Age on Their Own Terms": "為想要從容老去的每一個人",
  "Adults 25+ noticing the first signs of fine lines or loss of firmness":
    "25 歲以上,開始察覺細紋或緊緻度下降的族群",
  "Anyone prioritizing visible skin elasticity, hydration and glow":
    "重視肌膚彈性、水潤與光澤的族群",
  "People with brittle nails or hair that's lost its strength":
    "指甲易脆裂、髮絲缺乏韌性的族群",
  "Active individuals supporting joint and connective tissue resilience":
    "需呵護關節與結締組織的活躍族群",
  "Beauty-from-within enthusiasts who want clinically validated results":
    "追求臨床驗證效果的內服美容愛好者",
  "the Clinically Proven Bioactive Collagen Peptide": "經臨床驗證的生物活性膠原胜肽",
  "Vavitas formulates with VERISOL® — a specifically optimized bioactive collagen peptide backed by multiple peer-reviewed clinical studies for skin elasticity, wrinkle reduction and nail strength. Sourced from a leading European collagen specialist and delivered at the full clinical dose, with no fillers or artificial flavors.":
    "Vavitas 選用 VERISOL® ——一款經多項同儕評審臨床研究驗證、有助於肌膚彈性、皺紋減少與指甲強韌的生物活性膠原胜肽。源自歐洲領先膠原專家,以完整臨床劑量呈現,不含填充劑與人工香料。",

  // -------- Vitamin D3 + K2 --------
  "Vitamin D3 + K2 101 · The Synergy Formula": "維生素 D3 + K2 101 · 協同配方",
  "Sunshine in a Softgel — Engineered for the Modern Indoor Life":
    "軟膠囊中的陽光——為現代久坐室內生活而設計",
  "Traditional Vitamin D": "傳統維生素 D",
  "Half the Equation": "方程式的一半",
  "D2 or low-dose D3 boosts calcium absorption — but without K2, that calcium can drift into arteries and soft tissue instead of strengthening the skeleton it was meant to build.":
    "D2 或低劑量 D3 可促進鈣吸收,但若缺乏 K2,鈣可能沉積於動脈與軟組織,而非真正強化骨骼。",
  "Vavitas D3 + K2 (MK-7)": "Vavitas D3 + K2(MK-7)",
  "The Complete System": "完整系統",
  "D3 unlocks calcium absorption from the gut. K2 (MK-7) activates osteocalcin and matrix Gla protein to":
    "D3 在腸道開啟鈣的吸收。K2(MK-7)激活骨鈣素與基質 Gla 蛋白,",
  "guide that calcium into bones": "將鈣導向骨骼",
  "while keeping it out of arteries — true cardiovascular and skeletal synergy.":
    ",同時使其遠離動脈——實現心血管與骨骼的真正協同。",
  "The Modern Sunlight Gap": "現代陽光缺口",
  "We Live Indoors. Our Biology Hasn't Caught Up.": "我們生活在室內,生理卻尚未適應",
  "The Science of Synergy": "協同的科學",
  "How D3 and K2 Work Together — Step by Step": "D3 與 K2 如何協同——逐步解析",
  "D3 Absorbs Calcium": "D3 促進鈣吸收",
  "Vitamin D3 (cholecalciferol) signals your intestines to absorb calcium from food into the bloodstream — the form your body actually uses.":
    "維生素 D3(膽鈣化醇)促使腸道將食物中的鈣吸收入血——人體真正可利用的形式。",
  "Mealtime · gut uptake": "用餐時 · 腸道吸收",
  "K2 Activates the Couriers": "K2 激活搬運蛋白",
  "K2 (MK-7) activates osteocalcin and MGP — the proteins responsible for transporting calcium to bones and away from arterial walls.":
    "K2(MK-7)激活骨鈣素與 MGP——負責將鈣輸送至骨骼、遠離動脈壁的關鍵蛋白。",
  "In-transit · protein couriers": "運輸中 · 蛋白質搬運",
  "Calcium Lands Where It Belongs": "鈣抵達它該去的地方",
  "Bones and teeth gain density. Arteries stay flexible. The cardiovascular and skeletal systems work in harmony — not in conflict.":
    "骨骼與牙齒獲得密度,動脈保持彈性。心血管與骨骼系統協同合作,而非彼此衝突。",
  "Bone density · supple arteries": "骨密度 · 柔韌血管",
  "Sunlight Source": "陽光來源",
  "D3 synthesised": "合成 D3",
  "Gut Absorption": "腸道吸收",
  "Calcium uptake": "鈣的吸收",
  "Skeletal Strength": "骨骼強健",
  "K2 directs to bone": "K2 導入骨骼",
  "Heart Protection": "心臟守護",
  "Arteries stay clear": "動脈保持通暢",
  "Bone & Heart Spotlight": "骨骼與心臟聚焦",
  "One Nutrient Pair. Two Lifelong Systems.": "一對營養,守護兩大終生系統",
  "*MK-7 is the most bioavailable form of K2, with a half-life over 70× longer than MK-4.":
    "*MK-7 是 K2 中生物利用率最高的形式,半衰期超過 MK-4 的 70 倍。",
  "Clinically Optimal Dose": "臨床優選劑量",
  "5000IU D3 — the daily level endorsed by The Endocrine Society for adults with limited sun exposure.":
    "5000IU D3 —— 內分泌學會推薦、適合陽光暴露不足成年人的每日水平。",
  "MK-7 Bioactive Form": "MK-7 生物活性形式",
  "Premium menaquinone-7 from natural fermentation — the most absorbable, longest-lasting form of K2.":
    "源自天然發酵的優質甲基萘醌-7,K2 中吸收最佳、作用最持久的形式。",
  "Oil-Suspended Delivery": "油劑懸浮遞送",
  "Suspended in olive oil for fat-soluble vitamins to absorb up to 5× more efficiently than dry tablets.":
    "以橄欖油懸浮,脂溶性維生素吸收效率比乾壓錠劑高出最多 5 倍。",
  "Third-Party Verified": "第三方驗證",
  "Every batch tested in a US NSF-certified facility for potency, purity and freedom from heavy metals and contaminants.":
    "每批次均在美國 NSF 認證機構檢測效價、純度及重金屬與污染物。",
  "Who Will Thrive With It": "誰將因此受益",
  "Made for Bright Days and Long Lives": "為明媚日子與悠長歲月而生",
  "Office workers, drivers and anyone spending most daylight hours indoors":
    "上班族、駕駛及大部分白晝時間在室內的人群",
  "Adults 40+ protecting bone density and cardiovascular flexibility":
    "40 歲以上,呵護骨密度與心血管彈性的族群",
  "Women in or approaching menopause, when bone loss accelerates":
    "處於或即將進入更年期、骨流失加速的女性",
  "Active families building strong skeletons for the next generation":
    "為下一代構築強健骨骼的活力家庭",
  "People in northern latitudes or who consistently use sunscreen":
    "生活在高緯度地區或長期使用防曬霜的族群",
  "Anyone supplementing calcium and looking for safe, balanced support":
    "正在補鈣、希望獲得安全均衡支持的族群",
  "A New Benchmark for": "全新標竿",
  "Vavitas D3 + K2 sets a new bar for the category — pairing a clinically meaningful 5000IU of D3 with 100mcg of bioactive MK-7 in a single oil-suspended softgel. Manufactured in a US FDA-registered, NSF-certified facility and third-party tested for purity, it's the simplest, most rigorously verified way to close the modern sunshine gap and support lifelong bone and cardiovascular wellness.":
    "Vavitas D3 + K2 重新定義品類——在單粒油劑軟膠囊中,集合具臨床意義劑量 5000IU D3 與 100mcg 活性 MK-7。於美國 FDA 註冊、NSF 認證工廠生產,並經第三方純度檢測,是彌合現代陽光缺口、守護終生骨骼與心血管健康最簡潔、最嚴謹可驗證的方式。",
  "D3 Daily": "D3 每日劑量",
  "Bioactive K2": "活性 K2",
  "Certified": "已認證",

  // -------- Fish Oil --------
  "Fish Oil 101 · The Deep-Sea Omega-3 Formula": "魚油 101 · 深海 Omega-3 配方",
  "Ordinary Fish Oil": "一般魚油",
  "Low Concentration, EPA + DHA Only": "低濃度,僅含 EPA + DHA",
  "Most fish oils deliver only 30% omega-3 from large predatory fish — meaning more capsules, more fillers, higher heavy-metal exposure, and the missing third partner: DPA, the quiet multiplier of vascular metabolism.":
    "多數魚油僅含 30% Omega-3,且取自大型掠食性魚類——意味著更多膠囊、更多填充、更高重金屬風險,且缺少血管代謝的隱性放大器:DPA。",
  "Vavitas Deep-Sea Fish Oil": "Vavitas 深海魚油",
  "70% Omega-3 with the Complete EPA · DHA · DPA Trio":
    "70% Omega-3,EPA · DHA · DPA 完整三重組合",
  "10–20× more efficiently": "效率提升 10–20 倍",
  "The Modern Omega-3 Gap": "現代 Omega-3 缺口",
  "We Eat Less Deep-Sea Fish. Our Vessels Notice.": "深海魚攝取減少,血管最先察覺",
  "Omega-3 / softgel": "Omega-3 / 每粒",
  "Complete trio": "完整三重",
  "5-Star Tested": "五星檢測",
  "From Deep Sea to Cellular Health": "從深海到細胞健康",
  "How Vavitas Omega-3 Works — Step by Step": "Vavitas Omega-3 工作原理——逐步解析",
  "Sourced From Cold Deep Seas": "源自寒冷深海",
  "Small Peruvian anchovies — short-lived, low on the food chain — provide naturally clean omega-3 oil with minimal heavy metal accumulation.":
    "秘魯小鯷魚——生命週期短、處於食物鏈低端——天然提供純淨 Omega-3 魚油,重金屬累積極低。",
  "Origin · Peruvian deep waters": "源頭 · 秘魯深海",
  "Molecularly Distilled & Stabilised": "分子蒸餾 · 穩定保鮮",
  "Multi-stage molecular distillation removes contaminants and concentrates omega-3 to 70%+, while strict oxidation control keeps every softgel fresh.":
    "多級分子蒸餾去除污染物、將 Omega-3 濃縮至 70% 以上,嚴格的氧化控制讓每粒軟膠囊保持新鮮。",
  "Refinement · low oxidation": "精煉 · 低氧化",
  "Absorbed Where It Matters": "在重要之處被吸收",
  "EPA, DHA and DPA integrate into cell membranes — fueling the heart, brain, retina and vascular tissues that depend on marine omega-3.":
    "EPA、DHA 與 DPA 融入細胞膜,為仰賴海洋 Omega-3 的心臟、大腦、視網膜與血管組織持續供能。",
  "Cellular · whole-body delivery": "細胞級 · 全身遞送",
  "Deep-Sea Source": "深海源頭",
  "Peruvian anchovy": "秘魯鯷魚",
  "Molecular Refinement": "分子精煉",
  "70%+ Omega-3": "Omega-3 ≥ 70%",
  "Cellular Uptake": "細胞吸收",
  "Heart · brain · vessels": "心臟 · 大腦 · 血管",
  "Active Longevity": "活力長壽",
  "Daily, lifelong support": "每日,終生守護",
  "DPA · The Quiet Multiplier": "DPA · 隱性放大器",
  "One Trio. A Lifetime of Vascular Resilience.": "一組三重,守護終生血管韌性",
  "*IFOS-verified composition consistently exceeds the declared 25 mg DPA — typically >50 mg per softgel.":
    "*IFOS 檢測顯示 DPA 實際含量穩定超出標示 25mg,通常每粒 >50mg。",
  "Cardiovascular": "心血管",
  "EPA & DHA help maintain healthy lipid levels and normal vascular function.":
    "EPA 與 DHA 有助維持健康血脂水平與正常血管功能。",
  "Brain & Cognition": "大腦與認知",
  "DHA is a primary structural fatty acid of the brain, supporting clarity and focus.":
    "DHA 是大腦主要結構性脂肪酸,有助清晰思考與專注。",
  "Vision Support": "視力支持",
  "DHA is a critical building block of the retina, supporting healthy vision.":
    "DHA 是視網膜關鍵結構成分,有助維護健康視力。",
  "Joint & Mobility": "關節與活動",
  "Omega-3 supports a balanced inflammatory response for active, comfortable joints.":
    "Omega-3 有助平衡發炎反應,守護靈活舒適的關節。",
  "High Concentration": "高濃度",
  "700 mg Omega-3 per softgel (EPA 400 + DHA 300 + DPA 25 mg) — fewer capsules, easier daily compliance.":
    "每粒 700mg Omega-3(EPA 400 + DHA 300 + DPA 25mg)——更少膠囊,更易堅持。",
  "Low-Oxidation Control": "低氧化控制",
  "Strict TOTOX standards keep every softgel fresh and bioactive — no fishy aftertaste, full nutritional value.":
    "嚴格 TOTOX 標準保持每粒軟膠囊新鮮與生物活性——無魚腥回味,營養價值完整。",
  "Deep-Sea Anchovy Source": "深海鯷魚來源",
  "Small Peruvian anchovies — naturally lower in mercury and contaminants than tuna or salmon-derived oils.":
    "秘魯小鯷魚——天然低汞,污染物顯著低於鮪魚或鮭魚來源魚油。",
  "IFOS 5-Star Verified": "IFOS 五星認證",
  "Every batch independently tested by IFOS for potency, purity, oxidation and contaminants — and consistently exceeds label.":
    "每批次由 IFOS 獨立檢測效價、純度、氧化與污染物,且持續優於標籤聲明。",
  "Built for Daily, Long-Term Nutritional Care": "為每日長期營養守護而生",
  "Adults focused on cardiovascular and lipid management": "關注心血管與血脂管理的成人",
  "Long hours of mental work or high cognitive demand": "長時間腦力工作或高認知需求族群",
  "Active lifestyles, athletes and those with joint discomfort":
    "活力生活方式、運動員與關節不適族群",
  "Anyone who rarely eats oily deep-sea fish (salmon, sardine, mackerel)":
    "甚少食用油性深海魚(鮭魚、沙丁魚、鯖魚)的族群",
  "Adults 40+ committed to long-term vascular and brain wellness":
    "40 歲以上,致力於長期血管與大腦健康者",
  "Families seeking a clean, IFOS-verified daily omega-3":
    "希望選擇純淨、IFOS 認證日常 Omega-3 的家庭",
  "Vavitas Fish Oil sets a new bar for the category — pairing 700 mg of high-purity Omega-3 with the complete EPA · DHA · DPA trio in a single low-oxidation softgel. Sourced from cold Peruvian deep-sea anchovies, manufactured in a US FDA-registered, NSF-certified facility, and IFOS 5-Star verified for purity, potency and freshness — the most rigorously tested way to support lifelong heart, brain and vascular wellness.":
    "Vavitas 魚油重新定義品類——在單粒低氧化軟膠囊中,集合 700mg 高純度 Omega-3 與完整 EPA · DHA · DPA 三重組合。源自寒冷秘魯深海鯷魚,於美國 FDA 註冊、NSF 認證工廠生產,並通過 IFOS 五星純度、效價與新鮮度認證——是守護終生心臟、大腦與血管健康最嚴苛的選擇。",
  "Omega-3 Daily": "每日 Omega-3",
  "Complete Trio": "完整三重",
  "5-Star Verified": "五星認證",

  // -------- NMN --------
  "NMN 101 · The Science of Healthy Longevity": "NMN 101 · 健康長壽的科學",
  "Replenishing the Cellular Currency of Youth": "重新充注細胞中的青春能量貨幣",
  "NMN (β-Nicotinamide Mononucleotide) is the most efficient direct precursor to NAD⁺ — a coenzyme essential for energy metabolism, DNA repair and cellular vitality. As we age, NAD⁺ levels decline sharply. Vavitas NMN is engineered to restore them, drawing on decades of pioneering research from the world's leading longevity scientists.":
    "NMN(β-菸鹼醯胺單核苷酸)是 NAD⁺ 最高效的直接前體——一種對能量代謝、DNA 修復與細胞活力至關重要的輔酶。隨年齡增長,NAD⁺ 水平急劇下降。Vavitas NMN 汲取全球頂尖長壽科學家數十年的先鋒研究,為重塑 NAD⁺ 水平而設計。",
  "Step 01": "第 01 步",
  "Step 02": "第 02 步",
  "Step 03": "第 03 步",
  "NMN Intake": "攝取 NMN",
  "A natural B3-derived molecule found in broccoli, avocado and edamame — but only in trace amounts. Oral NMN is highly bioavailable in humans.":
    "天然 B3 衍生分子,在花椰菜、酪梨與毛豆中存在但含量極低。口服 NMN 在人體中具有高生物利用率。",
  "Conversion": "轉化",
  "Converts to NAD⁺": "轉化為 NAD⁺",
  "Of all NAD⁺ precursors (NA, NAM, NR, NMN), NMN is the most efficient — converted in a single enzymatic step to fuel every cell in the body.":
    "在所有 NAD⁺ 前體(NA、NAM、NR、NMN)中,NMN 效率最高——僅需一步酶促轉化,即可為全身細胞供能。",
  "Cellular Renewal": "細胞煥新",
  "NAD⁺ powers mitochondrial energy, sirtuin activation, DNA repair and cell revitalization — the biological foundations of healthy aging.":
    "NAD⁺ 驅動粒線體能量、激活去乙醯化酶、修復 DNA 與細胞復甦——這是健康老化的生物基礎。",
  "Nicotinamide Riboside (NR)": "菸鹼醯胺核糖(NR)",
  "The Indirect Path": "間接路徑",
  "An earlier-generation NAD⁺ precursor. NR must first be converted into NMN inside the cell before it can become NAD⁺ — adding an extra enzymatic step and reducing efficiency along the way.":
    "上一代 NAD⁺ 前體。NR 必須先在細胞內被轉化為 NMN,才能進一步生成 NAD⁺ ——多一步酶促,效率隨之下降。",
  "β-Nicotinamide Mononucleotide (NMN)": "β-菸鹼醯胺單核苷酸(NMN)",
  "The Direct Precursor": "直接前體",
  "single enzymatic step": "單步酶促轉化",
  "The Cellular Journey": "細胞之旅",
  "From a Single Capsule": "從一粒膠囊",
  "to Every Cell in Your Body": "抵達體內每一個細胞",
  "Trace NMN's path — absorbed in minutes, converted in a single enzymatic step, and delivered as NAD⁺ to power the body's most vital biological systems.":
    "追溯 NMN 的旅程——數分鐘內被吸收、單步酶促轉化為 NAD⁺,為身體最關鍵的生物系統持續供能。",
  "T+0 min": "T+0 分",
  "T+15 min": "T+15 分",
  "T+30 min": "T+30 分",
  "Continuous": "持續",
  "Oral Intake": "口服攝取",
  "A single Vavitas capsule delivers pharmaceutical-grade β-NMN — bypassing the trace amounts found in food.":
    "一粒 Vavitas 膠囊提供醫藥級 β-NMN ——遠超食物中的微量水平。",
  "Rapid Absorption": "快速吸收",
  "Specialized Slc12a8 transporters in the small intestine usher NMN into the bloodstream within minutes.":
    "小腸內的專屬 Slc12a8 轉運蛋白在數分鐘內將 NMN 送入血液。",
  "NAD⁺ Conversion": "NAD⁺ 轉化",
  "Inside every cell, NMN is converted to NAD⁺ in a single enzymatic step by NMNAT — the most efficient pathway known.":
    "在每個細胞內,NMN 經 NMNAT 一步酶促轉化為 NAD⁺ ——已知最高效路徑。",
  "NAD⁺ activates sirtuins, fuels mitochondria, repairs DNA — the biochemical foundation of healthy aging.":
    "NAD⁺ 激活去乙醯化酶、驅動粒線體、修復 DNA ——健康老化的生化基礎。",
  "Precursor": "前體",
  "NMNAT enzyme": "NMNAT 酶",
  "single step": "單步",
  "Cellular Fuel": "細胞燃料",
  "Outcomes": "成效",
  "Where Restored NAD⁺ Goes to Work": "重新充注的 NAD⁺ 在哪裡發揮作用",
  "The science you can feel — in the moments that make a life.":
    "科學,可被感受——在那些構成生活的真實時刻。",
  "Brain": "大腦",
  "Quiet focus": "寧靜專注",
  "Cognitive clarity & neuronal repair": "思維清晰與神經元修復",
  "Heart": "心臟",
  "Active years": "活力歲月",
  "Cardiovascular endurance": "心血管耐力",
  "Muscle": "肌肉",
  "Daily movement": "日常活動",
  "Mitochondrial energy output": "粒線體能量輸出",
  "Skin & Cells": "肌膚與細胞",
  "Sun-kissed glow": "陽光煥亮",
  "DNA repair & regeneration": "DNA 修復與再生",
  "The NMN → NAD⁺ pathway: from a single capsule, through the bloodstream, into every mitochondrion — restoring the cellular currency of youth.":
    "NMN → NAD⁺ 路徑:從一粒膠囊,經血流,抵達每一顆粒線體——重新充注青春的細胞能量貨幣。",
  "The Aging Equation": "老化方程式",
  "By 60, NAD⁺ Falls to Half of Young-Adult Levels": "到 60 歲,NAD⁺ 僅剩青壯年時的一半",
  "Decades of research confirm that NAD⁺ depletion is a hallmark of aging — directly linked to fatigue, metabolic slowdown, cardiovascular decline and cognitive changes. Restoring NAD⁺ has become one of the most promising frontiers in longevity science.":
    "數十年研究證實,NAD⁺ 衰減是老化的標誌——與疲勞、代謝減慢、心血管下降與認知變化直接相關。重塑 NAD⁺ 已成為長壽科學最具前景的前沿之一。",
  "Age 20": "20 歲",
  "Age 40": "40 歲",
  "Age 60": "60 歲",
  "Morning run · peak vitality preserved": "晨跑 · 巔峰活力",
  "Career & self-care · sustaining clarity": "事業與自我關照 · 保持清晰",
  "Active longevity · replenishing each day": "活力長壽 · 每日重塑",
  "Vavitas NMN 300mg · delayed-release intervention point":
    "Vavitas NMN 300mg · 延釋干預點",
  "Standing on the Shoulders of Giants": "站在巨人的肩膀上",
  "The Scientists Who Discovered NMN's Potential": "發掘 NMN 潛力的科學家們",
  "Modern NMN science was built by two visionaries whose work redefined what's possible in human longevity research.":
    "現代 NMN 科學由兩位富有遠見的學者奠定,他們的研究重新定義了人類長壽研究的可能。",
  "Pioneer of NMN Biology": "NMN 生物學先驅",
  "Prof. Shin-ichiro Imai": "今井真一郎 教授",
  "Washington University School of Medicine": "聖路易斯華盛頓大學醫學院",
  "His 2016 landmark study showed long-term NMN administration significantly slowed age-associated decline in mice — establishing NMN as a credible target for human longevity intervention.":
    "他在 2016 年的里程碑研究顯示,長期補充 NMN 顯著減緩小鼠的年齡相關衰退,確立了 NMN 作為人類長壽干預的可信靶點。",
  "Established the NMN → NAD⁺ → Sirtuin pathway as a key longevity-related metabolic axis":
    "確立 NMN → NAD⁺ → Sirtuin 通路為關鍵的長壽相關代謝軸",
  "Identified NMN absorption and transport mechanisms in the body":
    "闡明 NMN 在體內的吸收與轉運機制",
  "Demonstrated NMN improves age-related metabolic functions (animal studies)":
    "證明 NMN 可改善年齡相關代謝功能(動物實驗)",
  "Founding Scientist": "奠基科學家",
  "Imai defined the science.": "今井奠定了這門科學。",
  "Architect of Longevity Science": "長壽科學的建構者",
  "Prof. David A. Sinclair": "David A. Sinclair 教授",
  "Harvard Medical School": "哈佛醫學院",
  "His work on sirtuins and NAD⁺-boosting molecules reframed aging as a treatable biological process — and his bestseller":
    "他對去乙醯化酶與提升 NAD⁺ 分子的研究,將老化重塑為可干預的生物過程——其暢銷書",
  "brought NMN to global audiences.": "將 NMN 帶給全球讀者。",
  "Why We Age — and Why We Don't Have To": "我們為何老化——以及為何無需如此",
  "International Bestseller": "國際暢銷書",
  "Established that declining NAD⁺ is a key driver of aging":
    "確立 NAD⁺ 衰減是老化的關鍵驅動力",
  "Elevated NMN to global prominence through research and personal advocacy":
    "透過研究與個人倡導將 NMN 推向全球關注",
  "Advanced clinical translation and commercialization of NMN":
    "推進 NMN 的臨床轉化與商業化",
  "Global Visionary": "全球遠見者",
  "Sinclair brought NMN to the world.": "Sinclair 將 NMN 帶向世界。",
  "The Vavitas × AbinoNutra® Standard": "Vavitas × AbinoNutra® 標準",
  "Clinically Validated NMN.": "經臨床驗證的 NMN。",
  "Proven in Humans.": "於人體中驗證。",
  "NUS Healthy Longevity Centre": "新加坡國立大學健康長壽中心",
  "National University of Singapore": "新加坡國立大學",
  "The Landmark Trial with Prof. Andrea Maier": "與 Andrea Maier 教授的里程碑試驗",
  "Advanced human clinical trials of NMN": "推進 NMN 的人體臨床試驗",
  "Confirmed NAD⁺ elevation and safety": "確認 NAD⁺ 提升與安全性",
  "Enabled the shift from lab research to clinical application":
    "實現從實驗室研究到臨床應用的跨越",
  "Clinical Translator": "臨床轉化者",
  "She made NMN a clinically relevant intervention in human medicine.":
    "她讓 NMN 成為人類醫學中具臨床意義的干預方案。",
  "Inside our cGMP research laboratories — where every batch of AbinoNutra® NMN is tested for purity and potency.":
    "走進我們的 cGMP 研究實驗室——每一批 AbinoNutra® NMN 都經過純度與效價檢測。",
  "CSO & Scientific Team": "首席科學家與科研團隊",
  "A Decade of NMN Innovation": "十年 NMN 創新",
  "Our Chief Scientific Officer leads a US-based research team that has been advancing NMN since 2020 — pioneering scalable, high-purity manufacturing, achieving SA-GRAS recognition, and driving the regulatory progress that returned NMN to the U.S. market under FDA review.":
    "我們的首席科學家帶領美國本土研究團隊,自 2020 年起持續推進 NMN——開創可規模化的高純度生產、獲得 SA-GRAS 認可,並推動 NMN 在 FDA 審議下重返美國市場。",
  "Ongoing Global Research": "持續的全球研究",
  "Four Active Trials Across Three Countries": "橫跨三國的四項進行中試驗",
  "Beyond the published GeroScience study, our team is currently conducting four additional human clinical trials in Singapore, Japan and Taiwan — exploring NMN's diverse applications in physical performance, metabolic health and biological-age reversal.":
    "在已發表於 GeroScience 的研究之外,團隊正於新加坡、日本與台灣開展四項人體臨床試驗——探索 NMN 在體能、代謝健康與生物年齡逆轉中的多元應用。",
  "For Those Who Refuse to Slow Down": "獻給不願放慢腳步的人",
  "Adults 40+ proactively investing in healthy longevity": "40 歲以上、主動投資健康長壽的族群",
  "Performance-focused individuals seeking sustained cellular energy":
    "追求持續細胞能量、注重表現的族群",
  "Those experiencing age-related fatigue or metabolic slowdown":
    "感受到年齡相關疲勞或代謝減慢的族群",
  "Anyone interested in evidence-based biological-age management":
    "關注循證生物年齡管理的族群",
  "Health-conscious consumers who demand pharmaceutical-grade purity":
    "對醫藥級純度有要求的健康消費者",
  "Quality Assurance": "品質保證",
  "What Makes Vavitas NMN Different": "Vavitas NMN 的獨特之處",
  "AbinoNutra® award-winning NMN ingredient": "AbinoNutra® 屢獲殊榮的 NMN 原料",
  "US FDA-registered, cGMP-certified manufacturing": "美國 FDA 註冊、cGMP 認證生產",
  "≥99% chemical and optical purity": "化學與光學純度 ≥99%",
  "SA-GRAS recognized by FDA-accredited experts": "經 FDA 認可專家給予 SA-GRAS 認定",
  "Delayed-release capsule for optimal bioavailability": "延釋膠囊以優化生物利用率",
  "Validated by published human clinical data": "經已發表人體臨床數據驗證",
  "the Clinically Validated Choice": "經臨床驗證的選擇",
  "Vavitas formulates with AbinoNutra® NMN — an award-winning, pharmaceutical-grade β-Nicotinamide Mononucleotide produced under US FDA-registered cGMP standards and validated through published human clinical trials. The result: ≥99% chemical and optical purity, SA-GRAS recognition, and a delayed-release capsule engineered for maximum cellular bioavailability.":
    "Vavitas 選用 AbinoNutra® NMN ——獲獎的醫藥級 β-菸鹼醯胺單核苷酸,於美國 FDA 註冊的 cGMP 標準下生產,並通過已發表的人體臨床試驗驗證。其結果:≥99% 化學與光學純度、獲 SA-GRAS 認定、延釋膠囊以最大化細胞生物利用率。",
  "Purity": "純度",
  "FDA-Registered": "FDA 註冊",
  "Blood NAD⁺ elevation": "血液 NAD⁺ 提升",
  "over baseline (600 mg)": "(相較基線,600 mg)",
  "Years biological age": "生物年齡年數",
  "reduction (600 mg group)": "下降(600 mg 組)",
  "Chemical & optical": "化學與光學",
  "purity verified": "純度驗證",

  // -------- Global Certifications --------
  "Global Certifications": "全球認證",
  "Trusted Across": "信賴之名,橫跨",
  "Three Continents": "三大洲",
  "VAVITAS facilities in the United States, Germany, and Japan all operate under the world's most stringent pharmaceutical quality standards.":
    "VAVITAS 在美國、德國與日本的合作工廠,均遵循全球最嚴苛的醫藥級品質標準。",
  "United States": "美國",
  "Germany": "德國",
  "Japan": "日本",
  "Bactolac Pharmaceutical — Hauppauge, New York": "Bactolac Pharmaceutical · 美國紐約州 Hauppauge",
  "Gelita AG Headquarters — Eberbach, Baden-Württemberg":
    "Gelita AG 總部 · 德國巴登-符騰堡州 Eberbach",
  "Kaneka Corporation Headquarters — Osaka, Japan": "Kaneka 株式會社總部 · 日本大阪",
  "FDA Registered": "FDA 註冊",
  "NSF / GMP": "NSF / GMP",
  "cGMP Certified": "cGMP 認證",
  "EU-GMP Certified": "EU-GMP 認證",
  "ISO 22000": "ISO 22000",
  "IFS Food Standard": "IFS 食品標準",
  "GMP Certified": "GMP 認證",
  "Halal Certified": "清真認證",
  "Pharmaceutical-grade manufacturing under FDA oversight, ensuring every batch meets strict cGMP standards.":
    "在 FDA 監管下的醫藥級生產,確保每批次均符合嚴格 cGMP 標準。",
  "European pharmaceutical excellence with rigorous EU-GMP protocols and full traceability of every ingredient.":
    "歐洲醫藥級卓越製造,嚴苛 EU-GMP 流程,每一原料均可全程追溯。",
  "Precision Japanese craftsmanship — patented yeast-fermentation technology with the highest standards of purity, potency, and clinical validation.":
    "精密日本製造工藝——專利酵母發酵技術,以最高純度、效價與臨床驗證標準呈現。",
  "In partnership with Bactolac Pharmaceutical, Inc.": "與 Bactolac Pharmaceutical, Inc. 合作",
  "In partnership with Gelita AG": "與 Gelita AG 合作",
  "In partnership with Kaneka Corporation": "與 Kaneka 株式會社合作",
  "Founded 1995 · Hauppauge, New York · Large-scale Contract Manufacturer":
    "成立於 1995 年 · 紐約州 Hauppauge · 大型代工製造商",
  "Family-owned since 1875 · Global leader in collagen & gelatin":
    "1875 年家族企業 · 全球膠原與明膠領導者",
  "Founded 1949 · Osaka · Global leader in functional ingredients":
    "成立於 1949 年 · 大阪 · 全球功能性原料領導者",
  "One of the largest U.S. contract manufacturers of dietary supplements, Bactolac offers full-service R&D, manufacturing, and private-label services across diverse dosage forms — operating cGMP-certified, FDA-registered facilities.":
    "美國最大的膳食補充劑代工廠之一,Bactolac 提供從研發、生產到自有品牌的全流程服務,涵蓋多種劑型,工廠均通過 cGMP 認證並經 FDA 註冊。",
  "With ~3,000 employees and operations in 20+ countries, Gelita supplies pharmaceutical-grade collagen peptides and gelatin to the world's most demanding food, nutrition, and pharmaceutical brands — backed by industry-leading R&D and quality systems.":
    "Gelita 擁有約 3,000 名員工、業務遍及 20 餘國,為全球最具要求的食品、營養與製藥品牌提供醫藥級膠原胜肽與明膠,具備行業領先的研發與品質體系。",
  "A publicly listed Japanese chemicals & life-sciences company, Kaneka is the inventor and global benchmark for Ubiquinol® — the reduced, bio-active form of CoQ10 — produced via patented yeast fermentation and validated by extensive clinical research.":
    "Kaneka 為日本上市化工與生命科學公司,是 Ubiquinol®(輔酶 Q10 還原型生物活性形式)的發明者與全球標竿,採用專利酵母發酵工藝,並經大量臨床研究驗證。",
  "VAVITAS® Collagen Peptide": "VAVITAS® 膠原胜肽",
  "VERISOL® Stick Packs": "VERISOL® 條狀包裝",
  "Skin, Hair, Nail + Joint support — clinically studied bioactive collagen peptide stick packs.":
    "肌膚、髮絲、指甲 + 關節支持——臨床研究的生物活性膠原胜肽條狀裝。",
  "VAVITAS® Ubiquinol": "VAVITAS® 還原型輔酶 Q10",
  "Active CoQ10 · 100mg": "活性 CoQ10 · 100mg",
  "Superior absorption softgels — the active form of CoQ10 for heart & cellular energy.":
    "卓越吸收軟膠囊——活性輔酶 Q10,守護心臟與細胞能量。",
  "Beauty from Within — clinically studied bioactive collagen peptides for skin elasticity.":
    "由內而美——臨床研究的生物活性膠原胜肽,提升肌膚彈性。",
  "Bioactive Collagen Peptides®": "生物活性膠原胜肽 Bioactive Collagen Peptides®",
  "Trusted Science — targeted BCP® portfolio for joints, bones, muscles & beauty.":
    "可信賴的科學——針對關節、骨骼、肌肉與美容的 BCP® 產品組合。",
  "Kaneka Ubiquinol®": "Kaneka Ubiquinol®",
  "The reduced, bioactive form of CoQ10 — patented yeast-fermentation, clinically validated for cellular energy.":
    "輔酶 Q10 的還原型生物活性形式——專利酵母發酵,臨床驗證支持細胞能量。",
  "Kaneka Q10™": "Kaneka Q10™",
  "The global benchmark CoQ10 ingredient — premium purity for heart & cellular health supplements.":
    "全球標竿 CoQ10 原料——優質純度,適用於心臟與細胞健康補充劑。",
  "Manufacturing Partner": "製造合作夥伴",
  "Flagship Products": "旗艦產品",
  "Flagship Product Brands": "旗艦產品品牌",
  "Official Site": "官方網站",

  // -------- Utility pages --------
  "Your cart is currently empty": "您的購物車目前為空",
  "It looks like you haven't added any items yet. Start exploring our premium supplements.":
    "您尚未加入任何商品。開始探索我們的高端營養補充品吧。",
  "Continue Shopping": "繼續購物",
  "Return to Home": "返回首頁",
  "Thank You!": "感謝您!",
  "Your order has been successfully confirmed and is being processed.":
    "您的訂單已成功確認,正在處理中。",
  "Oops! Page not found": "頁面未找到",

  // -------- Addendum: split fragments & supplementary keys (zh-TW) --------
  "Vitamin D3": "維生素 D3",
  "K2 as MK-7": "K2(MK-7)",
  "Daily softgel": "每日軟膠囊",
  "EPA·DHA·DPA": "EPA·DHA·DPA",
  "High-Purity Omega-3 — Engineered for Lifelong Heart, Brain &amp; Vessel Health":
    "高純度 Omega-3 — 為心、腦、血管的終身健康而設計",
  "Modern diets fall short on the marine omega-3s the body cannot make. Vavitas pairs":
    "現代飲食難以提供身體無法自行合成的海洋 Omega-3。Vavitas 在每粒軟膠囊中搭配",
  "per softgel with a": "搭配",
  "DPA-enriched EPA · DHA · DPA": "DPA 強化的 EPA · DHA · DPA",
  "profile — the complete trio that supports cardiovascular, cognitive, and vascular wellness, batch after batch.":
    "組合——支持心血管、認知與血管健康的完整三聯體,批次始終如一。",
  "700 mg of Omega-3": "700 毫克 Omega-3",
  "in a single softgel — molecularly distilled from small Peruvian deep-sea anchovies, low-oxidation controlled, and IFOS-tested. The DPA upgrade supports lipid metabolism up to":
    "於單粒軟膠囊中——分子蒸餾自秘魯深海鯷魚,嚴控低氧化,IFOS 檢測。DPA 升級可使脂質代謝效率提升達",
  "10–20× more effectively": "10–20 倍",
  "than EPA alone.": "(相較單獨 EPA)。",
  "Refined diets, busy lifestyles and shrinking deep-sea fish intake leave most adults chronically short on EPA, DHA and DPA. Vavitas concentrates a clinically meaningful":
    "精緻飲食、忙碌生活與深海魚攝取減少,使大多數成年人長期缺乏 EPA、DHA 與 DPA。Vavitas 在單粒軟膠囊中濃縮臨床有效劑量",
  "into one softgel — the daily level supported by global cardiology guidance for sustained cardiovascular and cognitive resilience.":
    "——這正是全球心臟病學指南所支持的日常攝入水平,持續守護心血管與認知力。",
  "EPA and DHA are the omega-3s most people know — but DPA is the missing partner. DPA binds rapidly with phospholipids and crosses cellular barriers more efficiently than EPA alone. Independent research suggests DPA can support lipid metabolism":
    "EPA 與 DHA 是大眾熟知的 Omega-3,但 DPA 才是被忽略的夥伴。DPA 與磷脂結合迅速,穿越細胞屏障的效率高於單獨 EPA。獨立研究顯示,DPA 支持脂質代謝的效率可達",
  "than EPA — a meaningful upgrade for long-term cardiovascular and vessel health.":
    "(相較 EPA),為長期心血管與血管健康帶來重要升級。",
  "*IFOS-verified composition consistently exceeds the declared 25 mg DPA — typically &gt;50 mg per softgel.":
    "*IFOS 驗證顯示成分穩定超出標示 25 毫克 DPA,通常每粒軟膠囊 > 50 毫克。",
  "Over a billion people worldwide are vitamin D insufficient. But D3 alone isn't enough. Vavitas pairs":
    "全球超過 10 億人維生素 D 不足。但單靠 D3 遠遠不夠。Vavitas 將",
  "5000IU D3": "5000IU D3",
  "with": "與",
  "100mcg K2 (MK-7)": "100 微克 K2(MK-7)",
  "— the missing partner that directs calcium where it belongs: into bones and teeth, not arteries.":
    "——這一缺失的夥伴,把鈣引導到它該去的地方:骨骼與牙齒,而非動脈。",
  "Indoor work, sunscreen, latitude, age and skin tone all dramatically reduce the body's ability to synthesize vitamin D from sunshine. The result: nearly 1 in 2 adults are insufficient. Vavitas delivers a clinically meaningful":
    "室內工作、防曬、緯度、年齡與膚色都會大幅降低身體從陽光合成維生素 D 的能力。結果是:近 1/2 的成年人維生素 D 不足。Vavitas 提供具有臨床意義的劑量",
  "daily — the level supported by leading endocrinology research for sustained sufficiency.":
    "每日——這是頂尖內分泌研究所支持的、可維持長期充足的劑量水平。",
  "Bone density peaks in your late 20s, then steadily declines — especially after menopause and andropause. Meanwhile, arterial calcification quietly accelerates with age. The D3+K2 pairing is the only nutritional duo proven to support":
    "骨密度在 20 多歲達到頂峰後逐年下降——尤其在女性更年期與男性雄激素衰退期之後。同時,動脈鈣化隨年齡悄然加劇。D3+K2 的組合是唯一在營養學上同時支持",
  "both": "兩端",
  "ends of this equation, helping preserve skeletal strength while keeping vascular tissue supple.":
    "的方案——既維持骨骼力量,也保持血管柔韌。",
  "The reduced, active antioxidant form your body uses immediately. Up to":
    "身體可立即使用的還原型活性抗氧化形式。生物利用率可達",
  "than standard CoQ10 — directly supporting cellular energy and free-radical defense.":
    "——相較一般輔酶 Q10,直接支持細胞能量與抵禦自由基。",
  "Vavitas NMN is formulated with": "Vavitas NMN 採用",
  "AbinoNutra® NMN": "AbinoNutra® NMN",
  "— the award-winning ingredient produced in a US FDA-registered, cGMP facility with chemical and optical purity exceeding":
    "——這一獲獎原料,產自美國 FDA 註冊的 cGMP 工廠,化學與光學純度超過",
  ". It is one of the only NMN ingredients in the world validated in a published, gold-standard human clinical trial.":
    "。它是全球極少數通過已發表的金標準人體臨床試驗驗證的 NMN 原料之一。",
  "The most efficient direct precursor to NAD⁺ — converted in a":
    "NAD⁺ 最高效的直接前體——僅需",
  "by NMNAT. Larger and more bioactive than NR, NMN delivers cellular fuel exactly where the body needs it.":
    "由 NMNAT 轉化即可。分子較 NR 更大且更具生物活性,把細胞燃料精準送達。",
  "In partnership with": "合作夥伴:",
  "Professor Andrea Maier": "Andrea Maier 教授",
  ", Director of the Centre for Healthy Longevity at the National University of Singapore, our team conducted one of the largest randomized, double-blinded, placebo-controlled human trials on NMN. Published in":
    "(新加坡國立大學健康長壽研究中心主任)與我們的團隊共同進行了 NMN 領域規模最大的隨機、雙盲、安慰劑對照人體試驗之一,成果發表於",
  "GeroScience": "GeroScience 期刊",
  "(2023) and awarded": "(2023),並榮獲",
  "3rd Prize by the American Aging Association (AGE)": "美國老化協會(AGE)三等獎",
  "in 2024.": "(2024)。",
  "Source: Rajman, Chwalek, Sinclair.": "資料來源:Rajman、Chwalek、Sinclair。",
  "Replenish": "補充",
  "NAD⁺ here": "細胞內 NAD⁺",
  "Lifespan": "壽命",
  "Longevity": "長壽",
  "Cell Metabolism": "細胞代謝",
  "Energy · Repair": "能量 · 修復",
  "Harvard Med": "哈佛醫學院",
  "WashU Medicine": "華盛頓大學醫學院",
  "Deep-Sea Omega-3": "深海 Omega-3",
  "D3 + K2": "D3 + K2",

  // -------- Product card subtitles & taglines --------
  "1000mg · 700mg Omega-3": "1000mg · 700mg Omega-3",
  "5000IU + 100mcg": "5000IU + 100mcg",
  "300mg · Delayed Release": "300mg · 緩釋膠囊",
  "CoQ10 · 100mg · Superior Absorption": "CoQ10 · 100mg · 卓越吸收",
  "VERISOL® Bioactive Peptide": "VERISOL® 生物活性胜肽",
  "Supports Heart, Brain & Immune Health*": "支持心臟、大腦與免疫健康*",
  "Supports Bone Strength & Calcium Absorption*": "支持骨骼強健與鈣吸收*",
  "Supports Cellular Energy & Healthy Aging*": "支持細胞能量與健康老化*",
  "Supports Heart Health & Cellular Energy*": "支持心臟健康與細胞能量*",
  "Supports Skin Elasticity & Joint Health*": "支持肌膚彈性與關節健康*",

  // -------- Partnerships section --------
  "Partnership Opportunities": "合作機會",
  "Partner with VAVITAS — Building a Future of Science-Driven Health Together": "與 VAVITAS 攜手，共創科學健康未來",
  "We connect science, healthcare, and community to advance evidence-based nutrition solutions that support long-term health and quality of life.":
    "我們致力於連接科學、醫療與社區，共同探索基於證據的營養解決方案，助力長期健康與高品質生活。",
  "Research & Strategic Partnerships": "科研與戰略合作",
  "Collaborating with researchers, longevity experts, and institutions to advance evidence-based nutrition and healthy aging.":
    "與科研機構、大學實驗室、長壽醫學專家及健康組織共同推動營養科學創新與健康老化研究。",
  "Clinics & Wellness Centers": "診所與健康中心",
  "Providing science-informed nutritional solutions for functional medicine clinics, wellness centers, healthy aging and senior care organizations, and health professionals.":
    "為功能醫學診所、健康中心、長者健康與康養機構及健康專業人士提供科學營養解決方案。",
  "Community Health Partnerships": "社區健康合作",
  "Working with community organizations to promote lifelong wellness and health education.":
    "與社區組織、健康教育項目及公益機構共同促進長期健康管理。",
  "Brand & Innovation Partnerships": "品牌與創新合作",
  "Partnering with like-minded organizations to create innovative health solutions.":
    "歡迎具有共同理念的品牌夥伴探索聯合創新與長期合作機會。",
  "Let's Build Together": "攜手共建",
  "Start a Partnership Conversation": "開啟合作對話",
  "Whether you are seeking business partnerships, professional wellness collaborations, or strategic alliances, VAVITAS looks forward to becoming your trusted long-term partner.":
    "無論您尋求業務合作、專業健康合作還是戰略合作，VAVITAS 都期待成為您值得信賴的長期合作夥伴。",
  "Science-driven formulas with premium ingredients": "科學驅動配方與優質原料",
  "US-manufactured to rigorous quality standards": "美國生產，嚴謹品質標準",
  "Flexible and efficient global partnership models": "靈活高效的全球合作模式",
  "End-to-end support from a dedicated team": "專屬團隊提供全程支援",
  "First Name": "名字",
  "Last Name": "姓氏",
  "Business Email": "商務信箱",
  "Company / Organization": "公司 / 機構",
  "Website": "公司網址",
  "Phone Number": "聯絡電話",
  "Country / Region": "國家 / 地區",
  "Partnership Interest": "合作意向",
  "Message": "留言",
  "Select country / region…": "請選擇國家 / 地區…",
  "Search country…": "搜尋國家…",
  "No country found.": "未找到符合的國家。",

  "Select an option…": "請選擇一項…",
  "Tell us about your organization, target market, and the type of partnership you are interested in.":
    "請簡要介紹貴機構、目標市場,以及您感興趣的合作類型。",
  "Wholesale / Retail": "批發 / 零售",
  "Clinic / Wellness Center Partnership": "診所 / 健康中心合作",
  "Private Label / White Label": "自有品牌 / 白標",
  "Distribution": "經銷代理",
  "Scientific / Strategic Collaboration": "科研 / 戰略合作",
  "Research & Strategic Collaboration": "科研與戰略合作",
  "Clinics, Wellness & Senior Care Partnership": "診所、健康與康養機構合作",
  "Community Health & Education Partnership": "社區健康與教育合作",
  "Brand & Product Innovation Partnership": "品牌與產品創新合作",
  "Business & Market Collaboration": "商業與市場合作",
  "Other Partnership Inquiries": "其他合作諮詢",
  "Other": "其他",
  "Submit Partnership Inquiry": "提交合作諮詢",
  "Submitted — Thank You": "已提交 — 感謝您",
  "By submitting, you agree to be contacted by the VAVITAS partnerships team regarding your inquiry.":
    "提交即表示您同意 VAVITAS 合作團隊就您的諮詢與您聯繫。",
  "Missing information": "資訊不完整",
  "Please complete all required fields before submitting.": "提交前請填寫所有必填欄位。",
  "Inquiry received": "已收到您的諮詢",
  "Thank you. Your partnership inquiry has been received. Our team will review your message and get back to you shortly.":
    "感謝您。我們已收到您的合作諮詢,團隊將盡快審閱您的留言並與您聯繫。",
};
