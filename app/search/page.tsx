"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter, BookOpen, MessageSquare, Sparkles, Clock, DollarSign, Users, Shield } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { policies, searchPolicies } from "@/lib/policies"

// Helper function to format date consistently
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPolicies, setFilteredPolicies] = useState(policies)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isSearching, setIsSearching] = useState(false)

  // Enhanced categories with icons and descriptions
  const categories = [
    { id: "all", name: "All Policies", icon: <BookOpen className="h-4 w-4" />, count: policies.length },
    { id: "HR", name: "HR & Employment", icon: <Users className="h-4 w-4" />, count: policies.filter(p => p.category === "HR").length },
    { id: "Finance", name: "Finance & Benefits", icon: <DollarSign className="h-4 w-4" />, count: policies.filter(p => p.category === "Finance").length },
    { id: "Operations", name: "Operations", icon: <Clock className="h-4 w-4" />, count: policies.filter(p => p.category === "Operations").length },
    { id: "Compliance", name: "Compliance & Safety", icon: <Shield className="h-4 w-4" />, count: policies.filter(p => p.category === "Compliance").length },
  ]

  // Enhanced search with better intelligence
  const performSearch = async (query: string, category: string) => {
    setIsSearching(true)
    
    // Simulate AI-powered search delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300))
    
    let results = policies

    // Category filtering
    if (category !== "all") {
      results = results.filter(policy => policy.category === category)
    }

    // Enhanced search logic
    if (query.trim()) {
      const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0)
      
      results = results.filter(policy => {
        const searchableText = `
          ${policy.title.toLowerCase()}
          ${policy.description.toLowerCase()}
          ${policy.content.toLowerCase()}
          ${policy.tags.join(' ').toLowerCase()}
          ${policy.category.toLowerCase()}
        `
        
        // Check if all search terms are found in the policy
        return searchTerms.every(term => searchableText.includes(term))
      })

      // Sort by relevance (exact matches first, then partial matches)
      results.sort((a, b) => {
        const aScore = calculateRelevanceScore(a, query)
        const bScore = calculateRelevanceScore(b, query)
        return bScore - aScore
      })
    }

    setFilteredPolicies(results)
    setIsSearching(false)
  }

  // Calculate relevance score for better sorting
  const calculateRelevanceScore = (policy: any, query: string) => {
    const queryLower = query.toLowerCase()
    let score = 0

    // Title matches get highest score
    if (policy.title.toLowerCase().includes(queryLower)) score += 10
    if (policy.title.toLowerCase().startsWith(queryLower)) score += 5

    // Description matches
    if (policy.description.toLowerCase().includes(queryLower)) score += 5

    // Tag matches
    if (policy.tags.some((tag: string) => tag.toLowerCase().includes(queryLower))) score += 3

    // Content matches
    if (policy.content.toLowerCase().includes(queryLower)) score += 1

    return score
  }

  // Enhanced highlight function with better accuracy
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text

    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0)
    let highlightedText = text

    searchTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi')
      highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>')
    })

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
  }

  useEffect(() => {
    performSearch(searchQuery, selectedCategory)
  }, [searchQuery, selectedCategory])

  // Popular searches for better UX
  const popularSearches = [
    "leave policy",
    "reimbursement",
    "probation",
    "insurance",
    "appraisal",
    "WFH",
    "attendance",
    "salary"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-bold text-gray-900">Smart Policy Search</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find exactly what you're looking for with our AI-powered search. Search by keywords, categories, or browse popular topics.
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search policies, keywords, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-2 focus:border-orange-500 focus:ring-orange-500"
              />
              {isSearching && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-500"></div>
                </div>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4 text-gray-600" />
              <h3 className="text-sm font-medium text-gray-700">Filter by Category:</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" 
                      : "hover:bg-orange-50 hover:border-orange-200"
                  }`}
                >
                  {category.icon}
                  {category.name}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Popular Searches */}
          {!searchQuery && selectedCategory === "all" && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Popular Searches:
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <Button
                    key={search}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(search)}
                    className="text-sm hover:bg-orange-50 hover:border-orange-200"
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          <div className="space-y-4">
            {/* Results Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {filteredPolicies.length} policy{filteredPolicies.length !== 1 ? 'ies' : 'y'} found
                  {searchQuery && ` for "${searchQuery}"`}
                </span>
              </div>
              {filteredPolicies.length > 0 && (
                <Badge variant="outline" className="text-xs">
                  {selectedCategory === "all" ? "All Categories" : selectedCategory}
                </Badge>
              )}
            </div>

            {/* Enhanced Policy Cards */}
            {filteredPolicies.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredPolicies.map((policy) => (
                  <Card key={policy.id} className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-orange-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">
                            {highlightText(policy.title, searchQuery)}
                          </CardTitle>
                          <Badge variant="secondary" className="mb-2">
                            {policy.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {highlightText(policy.description, searchQuery)}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Content Preview */}
                      {searchQuery && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Content preview:</p>
                          <p className="text-sm line-clamp-3">
                            {highlightText(policy.content.substring(0, 200) + "...", searchQuery)}
                          </p>
                        </div>
                      )}

                      {/* Enhanced Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {policy.tags.slice(0, 5).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {highlightText(tag, searchQuery)}
                          </Badge>
                        ))}
                        {policy.tags.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{policy.tags.length - 5} more
                          </Badge>
                        )}
                      </div>

                      {/* Enhanced Actions */}
                      <div className="flex gap-2">
                        <Button asChild className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                          <Link href={`/policies/${policy.id}`}>
                            <BookOpen className="h-4 w-4 mr-2" />
                            View Policy
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <Link href={`/chat?policy=${policy.id}`}>
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Ask AI
                          </Link>
                        </Button>
                      </div>

                      {/* Last Updated */}
                      <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Updated: {new Date(policy.lastUpdated).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              /* Enhanced No Results */
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No policies found</h3>
                  <p className="text-gray-600 mb-4">
                    {searchQuery 
                      ? `No policies match "${searchQuery}" in the ${selectedCategory === "all" ? "selected categories" : selectedCategory} category.`
                      : "Try adjusting your search terms or browse all policies."
                    }
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button variant="outline" onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                    <Button variant="outline" onClick={() => setSelectedCategory("all")}>
                      Show All Categories
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
