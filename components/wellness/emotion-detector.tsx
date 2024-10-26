'use client';

import { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Pause, Play } from "lucide-react";
import { getEmotionSuggestion } from '@/lib/emotion-suggestions';

export function EmotionDetector() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');

  useEffect(() => {
    loadModels();
  }, []);

  useEffect(() => {
    if (currentEmotion) {
      const newSuggestion = getEmotionSuggestion(currentEmotion);
      setSuggestion(newSuggestion);
    }
  }, [currentEmotion]);

  const loadModels = async () => {
    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceExpressionNet.loadFromUri('/models');
      setIsModelLoaded(true);
    } catch (error) {
      console.error('Error loading models:', error);
    }
  };

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsVideoPlaying(true);
        detectEmotions();
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopVideo = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsVideoPlaying(false);
    }
  };

  const detectEmotions = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const detection = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (detection) {
      const emotions = detection.expressions;
      const dominantEmotion = Object.entries(emotions).reduce((a, b) => 
        a[1] > b[1] ? a : b
      )[0];
      setCurrentEmotion(dominantEmotion);

      // Draw detection on canvas
      const displaySize = { 
        width: videoRef.current.videoWidth, 
        height: videoRef.current.videoHeight 
      };
      faceapi.matchDimensions(canvasRef.current, displaySize);
      const resizedDetection = faceapi.resizeResults(detection, displaySize);
      
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        faceapi.draw.drawDetections(canvasRef.current, [resizedDetection]);
      }
    }

    if (isVideoPlaying) {
      requestAnimationFrame(detectEmotions);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Emotion Detection</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>

        <div className="flex justify-center space-x-4">
          {isModelLoaded && !isVideoPlaying ? (
            <Button onClick={startVideo}>
              <Camera className="mr-2 h-4 w-4" />
              Start Camera
            </Button>
          ) : isVideoPlaying ? (
            <Button onClick={stopVideo} variant="destructive">
              <Pause className="mr-2 h-4 w-4" />
              Stop Camera
            </Button>
          ) : (
            <Button disabled>
              <Play className="mr-2 h-4 w-4 animate-spin" />
              Loading Models...
            </Button>
          )}
        </div>

        {currentEmotion && (
          <div className="space-y-2">
            <p className="text-lg font-semibold">
              Current Emotion: {currentEmotion}
            </p>
            {suggestion && (
              <p className="text-muted-foreground">{suggestion}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}