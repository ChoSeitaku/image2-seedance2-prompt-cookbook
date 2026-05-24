---
model: image2
category: portrait
slug: panoramic-character-concept-breakdown
prompt_name: Panoramic Character Concept Breakdown Sheet
summary_zh: 根据参考角色生成一张包含全身立绘、服装分层、表情、材质特写与随身物品的全景式角色概念分解图。
summary_en: Generate a panoramic character concept breakdown sheet with full-body character art, outfit layers, expressions, material close-ups, and personal belongings.
tags:
  - image2
  - portrait
  - character-design
  - concept-art
  - anime
  - game-art
  - reference-sheet
  - outfit-breakdown
recommended_aspect_ratio:
  - 16:9
  - 4:3
  - 3:2
license: MIT
---
# 中文提示词
你是一位顶尖的游戏与动漫概念美术设计大师，擅长制作详尽的角色设定图。请根据用户提供的参考图或文字描述中的主体形象，生成一张“全景式角色深度概念分解图”。
画面需要呈现为高质量 2D 插画风格或概念设计草图风格，整体像一张专业角色设计稿、游戏美术设定页、动画角色资料板。线条干净利落，结构清晰，信息密度高，但排版有序。
**主体角色**
以 `{{SUBJECT}}` 为核心角色。  
严格分析并保留该角色的核心外貌特征、发型、发色、五官比例、体型、气质、服装风格与整体人设。  
中心位置放置角色的全身立绘或主要动态姿势，作为视觉锚点。角色姿态自然，具有鲜明性格表达。
角色设定关键词：`{{CHARACTER_TRAITS}}`  
整体风格方向：`{{ART_STYLE}}`
**构图布局**
- 中心位：放置角色完整全身立绘，展示正面或略带动态的主要造型。
- 环绕位：在中心人物四周有序排列拆解元素，包括服装、表情、道具、材质特写、随身物品等。
- 使用手绘箭头、细线引导、编号标签，将周边拆解物品与中心人物对应部位连接起来。
- 排版类似专业概念设定图、角色设定板、游戏美术拆解页。
- 背景使用 `{{BACKGROUND_STYLE}}`，例如米黄色羊皮纸、浅灰纹理纸、设计手稿背景。
- 每个拆解元素旁添加简洁中文手写注释，说明材质、结构、用途、品牌/型号暗示或角色习惯。
**服装分层拆解**
请将角色服装拆分为独立单品展示，包括但不限于：
- 外套、披肩、夹克、斗篷或外层服饰
- 上衣、衬衫、背心、内搭
- 裙装、裤装、腰封、腰带
- 袜子、鞋子、靴子
- 手套、发饰、饰品、眼镜、耳饰等配件
如果角色为多层穿搭，需要展示“脱下外套后的内层状态”。  
可以单独绘制一组小比例服装平铺图，像服装设计稿一样展示每件单品的形状、结构、扣件、拉链、缝线与装饰。
**内层衣物设计展示**
独立展示角色的内层衣物设计，但必须保持非色情、非裸露、专业服装设计稿风格。  
重点突出设计感、材质、颜色、剪裁和与角色性格的关系。  
展示方式应像服装设定图中的单品陈列，不表现挑逗姿势，不强调身体性暗示。
可包括：
- 内搭吊带、运动内衣、贴身背心、衬裙、安全裤、打底裤等
- 材质说明，如棉质、丝缎、蕾丝边、弹力布料、功能性面料等
- 颜色与角色主色调之间的呼应
**表情集**
在画面角落绘制 3-4 个头部特写，展示角色不同情绪状态。  
表情需要符合角色性格，不要随机夸张。
推荐表情：
- 标准表情
- 微笑或营业笑
- 惊讶/害羞/慌张
- 冷淡/认真/不耐烦
- 私下放松状态
表情方向：`{{EXPRESSION_SET}}`
**材质与细节特写**
选取 1-2 个关键部位进行放大特写，展示材质与工艺。  
可以包括：
- 布料纹理
- 皮革反光
- 金属扣件
- 刺绣纹样
- 发饰结构
- 鞋底纹路
- 魔法纹路/科技零件/徽章标记
同时增加小物件的质感特写，例如口红外壳、钥匙扣、耳机、药盒、电子设备、香水瓶等。
材质重点：`{{MATERIAL_FOCUS}}`
**关联物品与生活切片**
除大型道具外，需要增加角色的日常生活物品展示，体现角色隐藏面与生活感。
请绘制角色的随身包袋或手拿包，并将其“打开”，展示散落在旁边的内容物。  
物品需要根据角色性格合理设计，不要堆砌无关杂物。
可包括：
- 钱包、钥匙、交通卡、学生证/工牌
- 手机、耳机、充电线、移动电源
- 化妆品组合，如口红、粉饼、香水、小镜子、护手霜
- 护理用品，如创可贴、眼药水、常用药物/补剂盒
- 私密日记本、便签、信件、小护身符、幸运物
- 电子烟、糖果、能量饮料等体现性格的小物件
- 更私人的物件应以含蓄、生活化、非色情的方式呈现，例如收纳袋、折叠小包、护理用品盒等
随身物品方向：`{{PERSONAL_ITEMS}}`
**注释文字**
在每个拆解元素旁添加中文手写注释，风格像概念设计师的草稿批注。  
注释内容简洁但具体，例如：
- “磨砂金属扣，边缘有轻微旧化”
- “内层为柔软棉质，方便长时间活动”
- “包内常备薄荷糖和备用发圈”
- “鞋底加厚，适合城市通勤”
- “袖口有角色标志性纹样”
**画面质量要求**
- 高质量 2D 角色概念设计图
- 专业游戏美术设定板
- 全景式角色深度拆解
- 结构清晰，排版工整
- 光影统一，透视准确
- 色彩协调，符合角色人设
- 细节丰富但不过度杂乱
- 手绘箭头、编号、中文注释清晰可读
- 角色与周边拆解元素风格统一
最终画面应像一张完整的角色美术设定资料页：中心是角色全身立绘，周围环绕服装分层、表情集、材质特写、道具与生活物品，让观众能从一张图中理解角色的外观、穿搭逻辑、性格与日常生活细节。
# English Prompt
You are a top-tier game and anime concept art designer, highly skilled at creating detailed character reference sheets. Based on the uploaded reference image or the user's textual description, generate a panoramic deep character concept breakdown sheet.
The image should look like a high-quality 2D illustration or professional concept design sketch sheet, similar to a game character art board, animation character reference sheet, or production design document. The linework should be clean, the structure clear, and the information density high while remaining organized and readable.
**Main Character**
Use `{{SUBJECT}}` as the core character.  
Carefully analyze and preserve the character's key visual traits, hairstyle, hair color, facial proportions, body type, personality, outfit style, and overall character identity.  
Place a full-body character illustration or main dynamic pose in the center as the visual anchor. The pose should feel natural and expressive.
Character traits: `{{CHARACTER_TRAITS}}`  
Overall art direction: `{{ART_STYLE}}`
**Composition Layout**
- Center: place the complete full-body character illustration, front-facing or slightly dynamic.
- Surrounding areas: arrange breakdown elements around the central character, including outfit pieces, facial expressions, props, material close-ups, and personal belongings.
- Use hand-drawn arrows, thin guide lines, numbered labels, and callouts to connect each surrounding item to the relevant body part or character area.
- The layout should resemble a professional concept art sheet, character design board, or game art breakdown page.
- Use `{{BACKGROUND_STYLE}}` as the background, such as beige parchment paper, light gray textured paper, or a design manuscript background.
- Add concise handwritten Chinese annotations beside each breakdown element, describing materials, structure, function, brand/model hints, or character habits.
**Outfit Layer Breakdown**
Break the character's outfit into separate clothing items, including but not limited to:
- Coat, cape, jacket, cloak, or outer layer
- Top, shirt, vest, inner layer
- Skirt, pants, corset, belt
- Socks, shoes, boots
- Gloves, hair accessories, jewelry, glasses, earrings, and other accessories
If the character wears multiple layers, show the inner outfit state after removing the outer layer.  
Include small flat-lay clothing diagrams, similar to fashion design sketches, showing the shape, structure, buttons, zippers, stitching, seams, and decorative details of each item.
**Innerwear Design Display**
Independently display the character's innerwear or base-layer clothing design, while keeping it non-explicit, non-erotic, and in a professional fashion design sheet style.  
Focus on design, material, color, cut, and how it reflects the character's personality.  
The display should look like a garment design presentation, without seductive poses or sexualized body emphasis.
Possible items include:
- Camisole, sports bra, fitted tank top, slip dress, safety shorts, leggings, or base layer
- Material notes such as cotton, satin, lace trim, stretch fabric, or functional fabric
- Color coordination with the character's main palette
**Expression Sheet**
Draw 3-4 head close-ups in one corner of the image, showing different emotional states.  
The expressions should match the character's personality and should not feel random or overly exaggerated.
Recommended expressions:
- Neutral default expression
- Gentle smile or public-facing smile
- Surprised, shy, or flustered expression
- Cold, serious, or annoyed expression
- Relaxed private expression
Expression direction: `{{EXPRESSION_SET}}`
**Material and Detail Close-ups**
Select 1-2 key areas for enlarged close-up views to show material and craftsmanship.  
Possible focus areas include:
- Fabric texture
- Leather reflections
- Metal buckles
- Embroidery patterns
- Hair accessory structure
- Shoe sole pattern
- Magical patterns, sci-fi parts, or emblem details
Also add close-ups of small item textures, such as lipstick casing, keychain, earbuds, pill case, electronic device, or perfume bottle.
Material focus: `{{MATERIAL_FOCUS}}`
**Related Items and Slice-of-Life Objects**
In addition to large props, include the character's daily personal belongings to reveal their hidden personality and lifestyle.
Draw the character's daily bag, commuter bag, or handbag opened, with its contents scattered beside it.  
The items should be designed logically according to the character's personality, not randomly piled up.
Possible items include:
- Wallet, keys, transit card, student ID or work badge
- Phone, earbuds, charging cable, power bank
- Makeup set, such as lipstick, compact powder, perfume, small mirror, hand cream
- Care items, such as bandages, eye drops, medicine or supplement case
- Private diary, sticky notes, letters, small charm, lucky item
- E-cigarette, candy, energy drink, or other personality-revealing items
- More private objects should be presented in a subtle, everyday, non-erotic way, such as a small pouch, folded storage bag, or care item case
Personal item direction: `{{PERSONAL_ITEMS}}`
**Annotation Text**
Add handwritten Chinese annotations beside each breakdown element, similar to a concept artist's draft notes.  
The notes should be concise but specific, for example:
- “matte metal buckle with slightly worn edges”
- “soft cotton inner layer for long-term movement”
- “always carries mint candy and spare hair ties”
- “thickened soles, suitable for city commuting”
- “signature pattern on the sleeve cuff”
**Image Quality Requirements**
- High-quality 2D character concept design sheet
- Professional game art reference board
- Panoramic deep character breakdown
- Clear structure and organized layout
- Unified lighting and accurate perspective
- Harmonious color palette matching the character design
- Rich details without visual clutter
- Clear hand-drawn arrows, numbers, and readable Chinese annotations
- Consistent style between the central character and all surrounding breakdown elements
The final image should look like a complete character art reference page: a full-body character illustration in the center, surrounded by outfit layers, expression sheet, material close-ups, props, and slice-of-life personal objects, allowing the viewer to understand the character's appearance, clothing logic, personality, and daily life details from a single image.
# 中文反向提示词
低质量，模糊，水印，签名，logo，文字乱码，注释不可读，排版混乱，元素重叠，构图拥挤，比例错误，透视错误，人体结构错误，手指畸形，多余手指，缺失手指，脸部崩坏，五官错位，眼睛不对称，肢体扭曲，服装结构不合理，材质混乱，光影不统一，背景杂乱，过度写实，3D 渲染感，照片感，廉价 AI 感，低清晰度，过度锐化，过度磨皮，色情化，裸露，挑逗姿势，未成年人性感化，血腥，暴力，令人不适的私密物品展示。
# English Negative Prompt
low quality, blurry, watermark, signature, logo, garbled text, unreadable annotations, messy layout, overlapping elements, overcrowded composition, wrong proportions, bad perspective, incorrect anatomy, deformed hands, extra fingers, missing fingers, broken face, misplaced facial features, asymmetrical eyes, twisted limbs, unreasonable clothing structure, inconsistent materials, inconsistent lighting, cluttered background, overly realistic, 3D render look, photographic look, cheap AI look, low resolution, over-sharpened, over-smoothed skin, sexualized, nudity, seductive pose, sexualized minors, gore, violence, disturbing private object display.
# 使用场景 zh
- 根据角色参考图生成完整的角色设定资料页
- 为游戏、动漫、漫画、轻小说角色制作概念美术拆解图
- 展示角色服装分层、材质细节与配饰结构
- 为原创角色 OC 制作世界观与生活感补充设定
- 制作角色表情集、随身物品、包内物件展示图
- 用于 image-to-image 角色设计扩展与视觉设定归档
- 生成适合发布到 GitHub、作品集、设定集或社交媒体的角色设计模板图
# Use Cases en
- Generate a complete character reference sheet from a character image
- Create concept art breakdowns for game, anime, manga, or light novel characters
- Display outfit layers, material details, and accessory structures
- Expand original character designs with worldbuilding and lifestyle details
- Create expression sheets, personal belongings, and bag-content layouts
- Use for image-to-image character design expansion and visual documentation
- Produce character design template images suitable for GitHub, portfolios, art books, or social media posts
# 变量 Variables
| Key | zh | en | example_zh | example_en |
| --- | --- | --- | --- | --- |
| SUBJECT | 主体角色 | Main subject | 一位黑发红瞳、穿城市机能风外套的少女角色 | a girl with black hair, red eyes, and an urban techwear jacket |
| CHARACTER_TRAITS | 角色性格特征 | Character traits | 冷淡、独立、轻微厌世，但私下很细心 | aloof, independent, slightly world-weary, but secretly caring |
| ART_STYLE | 画面风格 | Art style | 高质量日系游戏概念设定图，干净线稿，细腻上色 | high-quality Japanese game concept art sheet, clean linework, delicate coloring |
| BACKGROUND_STYLE | 背景风格 | Background style | 米黄色羊皮纸纹理背景，带手稿感 | beige parchment paper texture background with a manuscript feel |
| EXPRESSION_SET | 表情方向 | Expression set | 标准冷脸、轻微嫌弃、被夸后害羞、私下放松微笑 | neutral cold face, slightly annoyed, shy after being praised, relaxed private smile |
| MATERIAL_FOCUS | 材质重点 | Material focus | 黑色防水尼龙、磨砂金属扣、透明 PVC 小挂件 | black waterproof nylon, matte metal buckles, transparent PVC charm |
| PERSONAL_ITEMS | 随身物品方向 | Personal items direction | 黑色通勤包、口红、耳机、补剂盒、私密日记本、薄荷糖 | black commuter bag, lipstick, earbuds, supplement case, private diary, mint candy |
# 示例 Cases
## Case 1
### case_name
城市机能风少女角色深度概念分解图
### variables
```json
{
  "SUBJECT": "一位黑发红瞳、穿城市机能风外套的少女角色",
  "CHARACTER_TRAITS": "冷淡、独立、轻微厌世，但私下很细心",
  "ART_STYLE": "高质量日系游戏概念设定图，干净线稿，细腻上色",
  "BACKGROUND_STYLE": "米黄色羊皮纸纹理背景，带手稿感",
  "EXPRESSION_SET": "标准冷脸、轻微嫌弃、被夸后害羞、私下放松微笑",
  "MATERIAL_FOCUS": "黑色防水尼龙、磨砂金属扣、透明 PVC 小挂件",
  "PERSONAL_ITEMS": "黑色通勤包、口红、耳机、补剂盒、私密日记本、薄荷糖"
}
```
### prompt_zh
你是一位顶尖的游戏与动漫概念美术设计大师，擅长制作详尽的角色设定图。请根据用户提供的参考图或文字描述中的主体形象，生成一张“全景式角色深度概念分解图”。

画面需要呈现为高质量 2D 插画风格或概念设计草图风格，整体像一张专业角色设计稿、游戏美术设定页、动画角色资料板。线条干净利落，结构清晰，信息密度高，但排版有序。

以一位黑发红瞳、穿城市机能风外套的少女角色为核心角色。严格保留她的黑色头发、红色眼睛、城市机能风穿搭、冷淡疏离但细节丰富的气质。中心位置放置角色的全身立绘或主要动态姿势，作为视觉锚点。角色姿态自然，带有轻微防备感和独立感。

角色设定关键词：冷淡、独立、轻微厌世，但私下很细心。

整体风格方向：高质量日系游戏概念设定图，干净线稿，细腻上色。

中心位放置完整全身立绘，周围有序排列服装分层、表情集、材质特写、随身包袋和生活物品。使用手绘箭头、细线引导和编号标签，将周边拆解物品与中心人物对应部位连接。背景为米黄色羊皮纸纹理背景，带手稿感。每个元素旁添加简洁中文手写注释。

将角色服装拆分展示：黑色防水机能外套、内层贴身背心、短裙或机能短裤、腰带、袜子、厚底鞋、手套、耳饰、透明 PVC 小挂件。展示脱下外套后的内层状态，并用小比例平铺图展示拉链、扣件、缝线、防水面料拼接和口袋结构。

独立展示角色的内层衣物设计，保持非色情、非裸露、专业服装设计稿风格。可展示黑色运动内衣、贴身背心、安全裤或打底裤，重点说明弹力面料、柔软棉质内衬、方便长时间行动的剪裁。

在画面角落绘制 4 个头部表情特写：标准冷脸、轻微嫌弃、被夸后害羞、私下放松微笑。表情变化细腻，符合冷淡但内心柔软的人设。

选取黑色防水尼龙、磨砂金属扣、透明 PVC 小挂件进行放大材质特写。展示防水尼龙的细密纹理、金属扣边缘磨损、PVC 挂件的半透明反光。

绘制她的黑色通勤包，并将包打开，展示散落的内容物：口红、耳机、补剂盒、私密日记本、薄荷糖、钥匙、手机、充电线、小镜子、创可贴。所有物品根据角色性格合理设计，体现她表面冷淡但生活细致的一面。

在每个拆解元素旁添加中文手写注释，例如：“黑色防水尼龙，轻微反光”“磨砂金属扣，边缘有旧化痕迹”“内层柔软棉质，适合长时间活动”“包内常备薄荷糖和备用发圈”“私密日记本，封面没有名字”。

画面需要高质量、结构清晰、光影统一、透视准确、色彩协调。最终效果像一张完整的游戏角色美术设定资料页：中心是角色全身立绘，周围环绕服装分层、表情集、材质特写、道具与生活物品，让观众能从一张图中理解角色的外观、穿搭逻辑、性格与日常生活细节。

### prompt_en
You are a top-tier game and anime concept art designer, highly skilled at creating detailed character reference sheets. Based on the uploaded reference image or the user's textual description, generate a panoramic deep character concept breakdown sheet.

The image should look like a high-quality 2D illustration or professional concept design sketch sheet, similar to a professional character design board, game art reference sheet, or animation production document. The linework should be clean, the structure clear, and the information density high while remaining organized and readable.

Use a girl with black hair, red eyes, and an urban techwear jacket as the core character. Carefully preserve her black hair, red eyes, urban techwear outfit, distant personality, and detailed design language. Place a full-body character illustration or main dynamic pose in the center as the visual anchor. Her pose should feel natural, slightly guarded, and independent.

Character traits: aloof, independent, slightly world-weary, but secretly caring.

Overall art direction: high-quality Japanese game concept art sheet, clean linework, delicate coloring.

Place the complete full-body character illustration in the center. Around her, arrange outfit layers, expression sheet, material close-ups, personal bag, and lifestyle objects. Use hand-drawn arrows, thin guide lines, and numbered labels to connect the surrounding breakdown elements to the relevant parts of the central character. Use a beige parchment paper texture background with a manuscript feel. Add concise handwritten Chinese annotations beside each element.

Break down the outfit into separate pieces: black waterproof techwear jacket, fitted inner tank top, short skirt or techwear shorts, belt, socks, platform shoes, gloves, earrings, and transparent PVC charm. Show the inner outfit state after removing the jacket, and include small flat-lay diagrams showing zippers, buckles, stitching, waterproof fabric panels, and pocket structures.

Independently display the character's innerwear or base-layer clothing design while keeping it non-explicit, non-erotic, and in a professional fashion design sheet style. Show a black sports bra, fitted tank top, safety shorts, or leggings, focusing on stretch fabric, soft cotton lining, and cuts suitable for long-term movement.

Draw 4 head close-ups in one corner: neutral cold face, slightly annoyed expression, shy expression after being praised, and relaxed private smile. The expressions should be subtle and match her aloof but secretly soft personality.

Create enlarged material close-ups of black waterproof nylon, matte metal buckles, and transparent PVC charm. Show the fine texture of waterproof nylon, worn edges on the metal buckles, and the translucent reflections of the PVC charm.

Draw her black commuter bag opened, with contents scattered nearby: lipstick, earbuds, supplement case, private diary, mint candy, keys, phone, charging cable, small mirror, and bandages. All items should be logically designed according to her personality, showing that she is outwardly cold but privately careful and organized.

Add handwritten Chinese annotations beside each breakdown element, such as: “black waterproof nylon, slight reflection”, “matte metal buckle with worn edges”, “soft cotton inner layer for long-term movement”, “always carries mint candy and spare hair ties”, “private diary, no name on the cover”.

The image should be high quality, clearly structured, with unified lighting, accurate perspective, and harmonious colors. The final result should look like a complete game character art reference sheet: a full-body character illustration in the center, surrounded by outfit layers, expression sheet, material close-ups, props, and personal lifestyle objects, allowing the viewer to understand the character's appearance, clothing logic, personality, and daily life details from a single image.