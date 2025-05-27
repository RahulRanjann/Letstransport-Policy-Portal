"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Filter, X, FileText, Calendar } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { policies, searchPolicies, categories } from "@/lib/policies"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredPolicies = useMemo(() => {
    let results = searchQuery ? searchPolicies(searchQuery) : policies

    if (selectedCategories.length > 0) {
      results = results.filter((policy) => selectedCategories.includes(policy.category))
    }

    return results
  }, [searchQuery, selectedCategories])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
  }

  const highlightText = (text: string, query: string) => {
    if (!query) return text

    const regex = new RegExp(`(${query})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Policies</h1>
            <p className="text-gray-600 mb-6">
              Find specific policies, procedures, and guidelines quickly using our intelligent search.
            </p>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search policies, procedures, guidelines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 text-lg h-12"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
                {selectedCategories.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {selectedCategories.length}
                  </Badge>
                )}
              </Button>

              {(searchQuery || selectedCategories.length > 0) && (
                <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-2">
                  <X className="h-4 w-4" />
                  Clear All
                </Button>
              )}
            </div>

            {/* Filters */}
            {showFilters && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Filter by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategories.includes(category) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Search Stats */}
            <div className="text-sm text-gray-600 mb-6">
              {searchQuery && (
                <p>
                  Found <strong>{filteredPolicies.length}</strong> result(s) for "{searchQuery}"
                </p>
              )}
              {!searchQuery && selectedCategories.length > 0 && (
                <p>
                  Showing <strong>{filteredPolicies.length}</strong> policies in selected categories
                </p>
              )}
            </div>
          </div>

          {/* Search Results */}
          <div className="space-y-6">
            {filteredPolicies.map((policy) => (
              <Card key={policy.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{policy.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(policy.lastUpdated).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{highlightText(policy.title, searchQuery)}</CardTitle>
                      <CardDescription className="text-base">
                        {highlightText(policy.description, searchQuery)}
                      </CardDescription>
                    </div>
                    <FileText className="h-6 w-6 text-gray-400 ml-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Content Preview */}
                  {searchQuery && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Content preview:</p>
                      <p className="text-sm">{highlightText(policy.content.substring(0, 200) + "...", searchQuery)}</p>
                    </div>
                  )}

                  {/* Tags */}
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

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button asChild>
                      <Link href={`/policies/${policy.id}`}>View Policy</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/chat?policy=${policy.id}`}>Ask AI</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredPolicies.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No policies found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Search Tips */}
          {!searchQuery && selectedCategories.length === 0 && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-lg">Search Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Quick Searches:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• "leave policy" - Find leave guidelines</li>
                      <li>• "driver safety" - Safety protocols</li>
                      <li>• "remote work" - WFH policies</li>
                      <li>• "expenses" - Reimbursement info</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Advanced Tips:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Use filters to narrow results</li>
                      <li>• Search by keywords or phrases</li>
                      <li>• Check content previews for context</li>
                      <li>• Use AI chat for specific questions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
