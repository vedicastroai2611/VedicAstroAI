"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Download, FileText, Calendar, MessageSquare, Star } from "lucide-react"
import Link from "next/link"

export default function ExportDataPage() {
  const [exportSettings, setExportSettings] = useState({
    format: "pdf",
    dataTypes: ["consultations", "predictions"],
    dateRange: "all",
    destination: "download",
  })

  const dataTypes = [
    { id: "consultations", name: "Consultation History", icon: MessageSquare, size: "2.3 MB" },
    { id: "predictions", name: "Daily Predictions", icon: Star, size: "1.8 MB" },
    { id: "charts", name: "Birth Charts", icon: Calendar, size: "0.5 MB" },
    { id: "transits", name: "Transit Reports", icon: Star, size: "1.2 MB" },
    { id: "profile", name: "Profile Data", icon: FileText, size: "0.1 MB" },
  ]

  const handleExport = () => {
    console.log("Exporting data:", exportSettings)
    // Export logic here
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/settings">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Export Insights</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          {/* Data Selection */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Select Data to Export
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dataTypes.map((dataType) => {
                const Icon = dataType.icon
                return (
                  <div key={dataType.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={dataType.id}
                        checked={exportSettings.dataTypes.includes(dataType.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setExportSettings({
                              ...exportSettings,
                              dataTypes: [...exportSettings.dataTypes, dataType.id],
                            })
                          } else {
                            setExportSettings({
                              ...exportSettings,
                              dataTypes: exportSettings.dataTypes.filter((t) => t !== dataType.id),
                            })
                          }
                        }}
                      />
                      <Label htmlFor={dataType.id} className="flex items-center text-foreground">
                        <Icon className="h-4 w-4 mr-2 text-accent" />
                        {dataType.name}
                      </Label>
                    </div>
                    <span className="text-sm text-muted-foreground">{dataType.size}</span>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Export Options */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Export Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-foreground">File Format</Label>
                <Select
                  value={exportSettings.format}
                  onValueChange={(value) => setExportSettings({ ...exportSettings, format: value })}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF Document</SelectItem>
                    <SelectItem value="csv">CSV Spreadsheet</SelectItem>
                    <SelectItem value="json">JSON Data</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Date Range</Label>
                <Select
                  value={exportSettings.dateRange}
                  onValueChange={(value) => setExportSettings({ ...exportSettings, dateRange: value })}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                    <SelectItem value="6months">Last 6 Months</SelectItem>
                    <SelectItem value="3months">Last 3 Months</SelectItem>
                    <SelectItem value="month">Last Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Destination</Label>
                <Select
                  value={exportSettings.destination}
                  onValueChange={(value) => setExportSettings({ ...exportSettings, destination: value })}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="download">Download to Device</SelectItem>
                    <SelectItem value="email">Email to Me</SelectItem>
                    <SelectItem value="drive">Google Drive</SelectItem>
                    <SelectItem value="dropbox">Dropbox</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Export Summary */}
          <Card className="border-border bg-card/50">
            <CardContent className="pt-4">
              <h3 className="font-semibold text-foreground mb-2">Export Summary</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Data Types: {exportSettings.dataTypes.length} selected</p>
                <p>Format: {exportSettings.format.toUpperCase()}</p>
                <p>Date Range: {exportSettings.dateRange === "all" ? "All Time" : exportSettings.dateRange}</p>
                <p>
                  Estimated Size: ~
                  {dataTypes
                    .filter((dt) => exportSettings.dataTypes.includes(dt.id))
                    .reduce((total, dt) => total + Number.parseFloat(dt.size), 0)
                    .toFixed(1)}{" "}
                  MB
                </p>
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={handleExport}
            className="w-full bg-primary hover:bg-primary/90"
            disabled={exportSettings.dataTypes.length === 0}
          >
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>
    </div>
  )
}
