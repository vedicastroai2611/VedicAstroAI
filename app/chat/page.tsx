"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, ThumbsUp, ThumbsDown, Bookmark, MoreVertical, Sparkles, Star } from "lucide-react"
import { AppLayout } from "@/components/app-layout"

export default function ChatPage() {
  const [message, setMessage] = useState("")

  const messages = [
    {
      id: 1,
      type: "ai",
      content:
        "🙏 Namaste! I am your Vedic astrology guide. Based on your birth chart, I can provide insights about your life path, relationships, career, and spiritual journey. How may I assist you today?",
      timestamp: "2:34 PM",
      reactions: { likes: 0, dislikes: 0, bookmarked: false },
    },
    {
      id: 2,
      type: "user",
      content: "How will my career progress this year? I'm currently in software development.",
      timestamp: "2:35 PM",
    },
    {
      id: 3,
      type: "ai",
      content:
        "⚡ Based on your birth chart analysis:\n\nYour current Jupiter Mahadasha indicates a favorable period for career growth. Saturn's position in your 10th house suggests steady progress through dedication and hard work.\n\nThe upcoming Mercury transit in your 6th house (March-May) will bring new opportunities in technology. Consider networking and skill enhancement during this period.",
      timestamp: "2:36 PM",
      reactions: { likes: 0, dislikes: 0, bookmarked: false },
    },
    {
      id: 4,
      type: "user",
      content: "Thank you! What about my health this year?",
      timestamp: "2:37 PM",
    },
  ]

  const quickSuggestions = ["Career guidance", "Love & relationships", "Health insights"]

  return (
    <AppLayout>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="border-b border-primary/30 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm relative overflow-hidden">
          {/* Mystical background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-4 py-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center mystical-glow float-animation">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground text-glow">VedicAstro AI</h1>
                  <p className="text-sm text-muted-foreground">Your Spiritual Guide</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="hover-lift">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="hover-lift">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Quick Suggestions */}
        <div className="border-b border-primary/30 bg-card/30 backdrop-blur-sm p-4">
          <div className="container mx-auto">
            <div className="flex items-center space-x-2 mb-3">
              <Star className="h-4 w-4 text-accent mystical-glow" />
              <span className="text-sm font-medium text-foreground">Ask me about:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickSuggestions.map((suggestion, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary/20 bg-primary/10 text-primary border-primary/30 transition-all duration-300 hover-lift mystical-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {suggestion}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-6 max-w-4xl">
            <div className="space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex space-x-3 max-w-3xl ${msg.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      {msg.type === "ai" ? (
                        <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-primary-foreground" />
                        </div>
                      ) : (
                        <>
                          <AvatarImage src="/woman-profile.png" />
                          <AvatarFallback>PS</AvatarFallback>
                        </>
                      )}
                    </Avatar>
                    <div className={`flex flex-col ${msg.type === "user" ? "items-end" : "items-start"}`}>
                      <Card
                        className={`border-primary/30 backdrop-blur-sm card-mystical ${
                          msg.type === "user" 
                            ? "bg-primary text-primary-foreground mystical-glow" 
                            : "bg-card/50"
                        }`}
                      >
                        <CardContent className="p-4">
                          <p className="text-sm leading-relaxed whitespace-pre-line">{msg.content}</p>
                        </CardContent>
                      </Card>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                        {msg.type === "ai" && (
                          <>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <ThumbsUp className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <ThumbsDown className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Bookmark className="h-3 w-3" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* AI Typing Indicator */}
              <div className="flex justify-start">
                <div className="flex space-x-3 max-w-3xl">
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </Avatar>
                  <Card className="border-border bg-card">
                    <CardContent className="p-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="border-t border-primary/30 bg-card/50 backdrop-blur-sm p-4 relative overflow-hidden">
          {/* Mystical background elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="Ask about your astrological insights..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 hover-lift"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      // Handle send message
                      setMessage("")
                    }
                  }}
                />
              </div>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 mystical-glow btn-mystical"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
