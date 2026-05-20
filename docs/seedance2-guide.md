# Seedance 2 Prompt Writing Guide

This guide explains how to structure effective prompts for **Seedance 2** video generation.

## Recommended Prompt Structure

A well-crafted Seedance 2 prompt typically includes the following elements:

### 1. Duration (时长)

Specify the desired video duration.

```
Template variable: DURATION
Example placeholder: 5 seconds
```

### 2. Subject (主体)

Describe the main subject appearing in the video.

```
Template variable: SUBJECT
Example placeholder: a sleek electric vehicle on a coastal highway
```

### 3. Location (场景)

Describe the environment and setting.

```
Template variable: LOCATION
Example placeholder: winding coastal road at golden hour, ocean cliffs in background
```

### 4. Action / Motion (动作)

Describe what is happening — the key movement or action in the scene.

```
Template variable: ACTION
Example placeholder: the vehicle drives along the curve, ocean waves crash below
```

### 5. Start Frame (起始画面)

Describe what the video should look like at the very beginning.

```
Template variable: START_FRAME
Example placeholder: wide establishing shot, empty road ahead, sun low on the horizon
```

### 6. End Frame (结束画面)

Describe what the video should look like at the end.

```
Template variable: END_FRAME
Example placeholder: close-up of the vehicle's front grille, motion blur on the background
```

### 7. Camera Movement (镜头运动)

Describe how the camera moves during the shot.

```
Template variable: CAMERA_MOVEMENT
Example placeholder: smooth dolly tracking shot, starts wide then pushes in to a medium close-up
```

### 8. Pace / Rhythm (节奏)

Describe the timing and rhythm of the scene.

```
Template variable: PACE
Example placeholder: slow and deliberate opening, gradual acceleration toward the end
```

### 9. Lighting (光线)

Describe lighting conditions throughout the shot.

```
Template variable: LIGHTING
Example placeholder: warm golden hour light, long shadows, lens flare as the sun hits the lens
```

### 10. Color Palette (色彩)

Describe the color treatment.

```
Template variable: COLOR_PALETTE
Example placeholder: warm amber and gold tones, deep blue ocean, desaturated asphalt
```

### 11. Style (风格)

Describe the visual style or reference.

```
Template variable: STYLE
Example placeholder: premium automotive commercial, high-end cinematography, anamorphic lens
```

### 12. Mood (氛围)

Describe the emotional atmosphere.

```
Template variable: MOOD
Example placeholder: aspirational, serene, adventurous
```

## Negative Prompt

Common negative prompts for video generation:

```
low quality, blurry, jittery, flickering, inconsistent frames, warping,
morphing artifacts, temporal inconsistency, watermark, text overlay,
unnatural motion, glitch, stuttering, bad morphology
```

## Aspect Ratio Recommendations

| Use Case | Recommended Aspect Ratio |
| --- | --- |
| YouTube / landscape video | 16:9 |
| Shorts / Reels / TikTok | 9:16 |
| Instagram Stories | 9:16 |

## Duration Recommendations

| Use Case | Recommended Duration |
| --- | --- |
| Social media short | 5s |
| Product showcase | 5s - 10s |
| Cinematic clip | 10s |
| Image-to-video | 5s |

## Variable Usage

Variables in prompt templates use the `UPPERCASE` format. When the prompt is rendered, these variables are replaced with actual values.

Template example:
```
A DURATION video of SUBJECT in LOCATION. The scene shows ACTION. 
Starts with START_FRAME and ends with END_FRAME. 
CAMERA_MOVEMENT. PACE pacing. LIGHTING. COLOR_PALETTE. STYLE style. MOOD mood.
```
