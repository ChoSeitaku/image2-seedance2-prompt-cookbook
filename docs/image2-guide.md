# Image2 Prompt Writing Guide

This guide explains how to structure effective prompts for **Image2** image generation.

## Recommended Prompt Structure

A well-crafted Image2 prompt typically includes the following elements:

### 1. Subject (主体)

Describe the main subject of the image. Be specific about what or who is in the scene.

```
Template variable: SUBJECT
Example placeholder: a young woman wearing a black trench coat
```

### 2. Location / Scene (场景)

Describe where the subject is placed. Include environmental details.

```
Template variable: LOCATION
Example placeholder: a rainy Tokyo street at night, neon reflections on wet pavement
```

### 3. Composition (构图)

Describe how elements are arranged in the frame.

```
Template variable: COMPOSITION
Example placeholder: medium shot, subject centered, rule of thirds
```

### 4. Camera Angle (镜头角度)

Describe the camera perspective and lens characteristics.

```
Template variable: CAMERA_ANGLE
Example placeholder: eye-level shot, 85mm lens, shallow depth of field
```

### 5. Lighting (光线)

Describe the lighting conditions and quality.

```
Template variable: LIGHTING
Example placeholder: cinematic rim lighting, soft key light from the left, blue ambient fill
```

### 6. Color Palette (色彩)

Describe the desired color scheme.

```
Template variable: COLOR_PALETTE
Example placeholder: cool teal and orange, desaturated shadows, neon accent colors
```

### 7. Style (风格)

Describe the artistic or photographic style.

```
Template variable: STYLE
Example placeholder: cinematic photography, Wong Kar-wai inspired, film grain
```

### 8. Texture (质感)

Describe surface qualities and material properties.

```
Template variable: TEXTURE
Example placeholder: wet surfaces, reflective puddles, smooth skin texture
```

### 9. Mood / Atmosphere (氛围)

Describe the emotional tone and atmosphere.

```
Template variable: MOOD
Example placeholder: melancholic, contemplative, mysterious
```

## Negative Prompt

Always include a negative prompt to avoid common artifacts. A general-purpose negative prompt:

```
low quality, blurry, watermark, text, logo, deformed, bad anatomy,
extra limbs, missing arms, missing legs, fused fingers, low resolution,
oversaturated, unnatural colors
```

## Aspect Ratio Recommendations

| Use Case | Recommended Aspect Ratio |
| --- | --- |
| Social media post | 1:1, 4:5 |
| Portrait / mobile wallpaper | 9:16 |
| Landscape / desktop wallpaper | 16:9 |
| Print | 3:4, 2:3 |

## Variable Usage

Variables in prompt templates use the `UPPERCASE` format. When the prompt is rendered, these variables are replaced with actual values.

Template example:
```
A portrait of SUBJECT, standing in LOCATION, COMPOSITION composition,
CAMERA_ANGLE camera angle, LIGHTING lighting, COLOR_PALETTE color palette,
STYLE style, TEXTURE texture, MOOD atmosphere.
```
