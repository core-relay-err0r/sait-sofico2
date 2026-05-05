import { Package, FileText, Settings } from "lucide-react"
import { Container } from "@/components/container"
import { catalogItems } from "@/content/catalog"

export default function AdminPage() {
  return (
    <div className="bg-background pt-20 min-h-screen">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Dashboard
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-serif text-foreground">
              Admin Panel
            </h1>
            <p className="mt-4 text-muted-foreground">
              Catalog overview and site information.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Stats Cards */}
            <div className="border border-border p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Package className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Catalog Items</span>
              </div>
              <p className="text-3xl font-semibold text-foreground">{catalogItems.length}</p>
              <p className="mt-1 text-xs text-muted-foreground">Active products</p>
            </div>

            <div className="border border-border p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Categories</span>
              </div>
              <p className="text-3xl font-semibold text-foreground">
                {[...new Set(catalogItems.map(i => i.category))].length}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Product categories</p>
            </div>

            <div className="border border-border p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Status</span>
              </div>
              <p className="text-lg font-semibold text-green-500">Active</p>
              <p className="mt-1 text-xs text-muted-foreground">System operational</p>
            </div>
          </div>

          {/* Catalog Table */}
          <div className="mt-12 max-w-5xl mx-auto">
            <h2 className="text-lg font-semibold text-foreground mb-6">Catalog Overview</h2>
            <div className="border border-border overflow-hidden">
              <table className="w-full">
                <thead className="bg-card">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">SKU</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">MOQ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {catalogItems.map((item) => (
                    <tr key={item.sku} className="hover:bg-card/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-accent">{item.sku}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{item.name}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.category}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.moq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 border border-border p-6 bg-card">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> This is a read-only catalog overview. 
                For catalog updates, please contact the development team.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
