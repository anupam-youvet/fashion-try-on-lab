
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Image, Download, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Studio = () => {
  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState(1);
  const [clothingImage, setClothingImage] = useState<string | null>(null);
  const [modelImage, setModelImage] = useState<string | null>(null);
  const [backgroundType, setBackgroundType] = useState("plain");
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock models for selection
  const presetModels = [
    {
      id: 1,
      name: "Model 1",
      image: "/placeholder.svg",
      type: "female",
    },
    {
      id: 2,
      name: "Model 2",
      image: "/placeholder.svg",
      type: "male",
    },
    {
      id: 3,
      name: "Model 3",
      image: "/placeholder.svg",
      type: "female",
    },
    {
      id: 4,
      name: "Model 4",
      image: "/placeholder.svg",
      type: "male",
    },
  ];

  // Mock backgrounds for selection
  const backgrounds = [
    {
      id: 1,
      name: "Plain White",
      image: "/placeholder.svg",
      type: "plain",
    },
    {
      id: 2,
      name: "Fashion Studio",
      image: "/placeholder.svg",
      type: "styled",
    },
    {
      id: 3,
      name: "Urban Street",
      image: "/placeholder.svg",
      type: "styled",
    },
    {
      id: 4,
      name: "Neutral Gray",
      image: "/placeholder.svg",
      type: "plain",
    },
  ];

  const handleClothingUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setClothingImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      toast({
        title: "Image uploaded",
        description: "Your clothing image has been uploaded successfully.",
      });
      setActiveStep(2);
    }
  };

  const handleModelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setModelImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      toast({
        title: "Image uploaded",
        description: "Your model image has been uploaded successfully.",
      });
    }
  };

  const selectPresetModel = (modelImage: string) => {
    setModelImage(modelImage);
  };

  const handleBackgroundChange = (type: string) => {
    setBackgroundType(type);
  };

  const handleGenerate = () => {
    if (!clothingImage || !modelImage) {
      toast({
        title: "Missing images",
        description: "Please upload both clothing and model images.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock result - in a real app, this would be the API response
      setResultImage("/placeholder.svg");
      setIsGenerating(false);
      setActiveStep(3);
      toast({
        title: "Generation complete",
        description: "Your virtual try-on has been generated successfully.",
      });
    }, 3000);
  };

  const handleDownload = () => {
    // In a real app, you would implement downloading the image
    toast({
      title: "Download started",
      description: "Your image is being downloaded.",
    });
  };

  const handleShare = () => {
    // In a real app, you would implement sharing functionality
    toast({
      title: "Share link copied",
      description: "Link has been copied to your clipboard.",
    });
  };

  const handleReset = () => {
    setClothingImage(null);
    setModelImage(null);
    setResultImage(null);
    setActiveStep(1);
    toast({
      title: "Reset complete",
      description: "Start a new virtual try-on.",
    });
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Fashion Studio Try-On</h1>
          <p className="text-fashion-gray-700 max-w-2xl mx-auto">
            Transform your clothing images into virtual try-ons with our AI-powered tool.
          </p>
        </div>

        {/* Studio Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Controls */}
          <div className="lg:col-span-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className={`space-y-4 ${activeStep !== 1 ? 'opacity-70' : ''}`}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-fashion-primary text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <h3 className="font-semibold text-lg">Upload Clothing</h3>
                    </div>
                    
                    {clothingImage ? (
                      <div className="relative w-full h-40 rounded-md overflow-hidden">
                        <img 
                          src={clothingImage} 
                          alt="Uploaded clothing" 
                          className="w-full h-full object-cover"
                        />
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="absolute bottom-2 right-2"
                          onClick={() => setClothingImage(null)}
                        >
                          Change
                        </Button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-fashion-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                        <Upload className="text-fashion-gray-500 mb-2" size={24} />
                        <p className="text-fashion-gray-500 text-center mb-4">
                          Drag and drop or browse to upload
                        </p>
                        <Button asChild variant="outline">
                          <label className="cursor-pointer">
                            Browse Files
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={handleClothingUpload} 
                            />
                          </label>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Step 2 */}
                  <div className={`space-y-4 ${activeStep !== 2 ? 'opacity-70' : ''}`}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-fashion-primary text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <h3 className="font-semibold text-lg">Select Model & Background</h3>
                    </div>
                    
                    <Tabs defaultValue="preset" className="w-full">
                      <TabsList className="grid grid-cols-2 mb-4">
                        <TabsTrigger value="preset">Preset Models</TabsTrigger>
                        <TabsTrigger value="upload">Upload Model</TabsTrigger>
                      </TabsList>
                      <TabsContent value="preset">
                        <div className="grid grid-cols-2 gap-3">
                          {presetModels.map((model) => (
                            <div 
                              key={model.id}
                              onClick={() => selectPresetModel(model.image)}
                              className={`cursor-pointer rounded-md overflow-hidden border-2 ${modelImage === model.image ? 'border-fashion-primary' : 'border-transparent'}`}
                            >
                              <img 
                                src={model.image} 
                                alt={model.name}
                                className="w-full h-24 object-cover"
                              />
                              <div className="text-center text-sm py-1">
                                {model.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="upload">
                        <div className="border-2 border-dashed border-fashion-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                          <Image className="text-fashion-gray-500 mb-2" size={24} />
                          <p className="text-fashion-gray-500 text-center mb-4">
                            Upload your own model image
                          </p>
                          <Button asChild variant="outline">
                            <label className="cursor-pointer">
                              Browse Files
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                onChange={handleModelUpload} 
                              />
                            </label>
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <h4 className="font-medium mt-4">Select Background</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {backgrounds.map((bg) => (
                        <div 
                          key={bg.id}
                          onClick={() => handleBackgroundChange(bg.type)}
                          className={`cursor-pointer rounded-md overflow-hidden border-2 ${backgroundType === bg.type ? 'border-fashion-primary' : 'border-transparent'}`}
                        >
                          <img 
                            src={bg.image} 
                            alt={bg.name}
                            className="w-full h-20 object-cover"
                          />
                          <div className="text-center text-sm py-1">
                            {bg.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Generate Button */}
                  <Button 
                    className="w-full bg-fashion-primary hover:bg-fashion-primary-dark"
                    onClick={handleGenerate}
                    disabled={isGenerating || !clothingImage || !modelImage}
                  >
                    {isGenerating ? 'Generating...' : 'Generate Try-On'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Side - Preview & Results */}
          <div className="lg:col-span-8">
            <Card className="h-full">
              <CardContent className="p-6 h-full">
                {activeStep < 3 ? (
                  <div className="flex flex-col h-full justify-center items-center">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-semibold mb-2">Preview</h3>
                      <p className="text-fashion-gray-600">
                        Your virtual try-on will appear here after generation.
                      </p>
                    </div>
                    <div className="w-full max-w-md aspect-[3/4] bg-fashion-gray-100 rounded-md flex items-center justify-center">
                      {isGenerating ? (
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 border-4 border-fashion-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                          <p className="text-fashion-gray-600">Generating your try-on...</p>
                        </div>
                      ) : (
                        <p className="text-fashion-gray-500">Complete steps 1-2 and click Generate</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="h-full">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-semibold">Your Virtual Try-On</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={handleDownload}>
                          <Download size={18} className="mr-1" /> Download
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleShare}>
                          <Share size={18} className="mr-1" /> Share
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(100%-70px)]">
                      {/* Before */}
                      <div className="flex flex-col">
                        <h4 className="text-fashion-gray-700 mb-2">Original Clothing</h4>
                        <div className="flex-grow bg-fashion-gray-100 rounded-md overflow-hidden">
                          {clothingImage && (
                            <img
                              src={clothingImage}
                              alt="Original clothing"
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                      </div>
                      
                      {/* After */}
                      <div className="flex flex-col">
                        <h4 className="text-fashion-gray-700 mb-2">Virtual Try-On Result</h4>
                        <div className="flex-grow bg-fashion-gray-100 rounded-md overflow-hidden relative">
                          {resultImage && (
                            <img
                              src={resultImage}
                              alt="Try-on result"
                              className="w-full h-full object-contain"
                            />
                          )}
                          <div className="absolute bottom-4 right-4">
                            <Button 
                              variant="secondary" 
                              size="sm"
                              onClick={handleReset}
                            >
                              Try Another
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
