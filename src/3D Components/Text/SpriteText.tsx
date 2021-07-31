import { MeshProps, SpriteProps, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef, useState } from "react";
import { SpriteMaterial } from "three";

export type TextProps = {
    children: string;
    fontSize?: number;
    color?: string;
    position: [number, number, number];
    scale?: [number, number, number];
};


const SpriteText: React.FC<TextProps> = ({ color = 'white', fontSize = 4.5, children, position }) => {
    const ref = useRef<MeshProps>();
    const [progressivePosition, setProgressivePosition] = useState<[number, number, number]>([0, 0, 0]);

    const canvas = useMemo(() => {
        var fontface = 'Arial'
        var borderThickness = 4

        var canvas = document.createElement('canvas')
        var context = canvas.getContext('2d')
        if (context) {
            context.textBaseline = 'bottom'
            context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
            var metrics = context.measureText(children)
            console.log(metrics)
            context.lineWidth = 100
            context.fillStyle = color
            context.fillText(children, 0, 100, 300)
        }

        return canvas
    }, [children]);


    useFrame(() => {

        if (position[0] > 0) {
            if (progressivePosition[0] < position[0]) {
                setProgressivePosition([progressivePosition[0] + 0.1, progressivePosition[1], progressivePosition[2]]);
            }
        } else {
            if (progressivePosition[0] > position[0]) {
                setProgressivePosition([progressivePosition[0] - 0.1, progressivePosition[1], progressivePosition[2]]);
            }
        }

        if (position[1] > 0) {
            if (progressivePosition[1] < position[1]) {
                setProgressivePosition([progressivePosition[0], progressivePosition[1] + 0.1, progressivePosition[2]]);
            }
        } else {
            if (progressivePosition[1] > position[1]) {
                setProgressivePosition([progressivePosition[0], progressivePosition[1] - 0.1, progressivePosition[2]]);
            }
        }

        if (position[2] > 0) {
            if (progressivePosition[2] < position[2]) {
                setProgressivePosition([progressivePosition[0], progressivePosition[1], progressivePosition[2] + 0.1]);
            }
        } else {
            if (progressivePosition[2] > position[2]) {
                setProgressivePosition([progressivePosition[0], progressivePosition[1], progressivePosition[2] - 0.1]);
            }
        }
    });


    return (
        <sprite ref={ref} scale={[4, 2, 10]} position={progressivePosition}>
            <spriteMaterial sizeAttenuation={true} attach="material" >
                <canvasTexture attach="map" image={canvas} />
            </spriteMaterial>

        </sprite>
    )
}

export default SpriteText;