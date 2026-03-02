import { vendorPlaceholders } from "@/content/vendors"

type Props = {
  dense?: boolean
}

export function VendorGrid({ dense }: Props) {
  return (
    <div
      className={
        dense
          ? "grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6"
          : "grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
      }
    >
      {vendorPlaceholders.map((vendor) => (
        <div
          key={vendor.id}
          className={
            dense
              ? "flex h-20 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:bg-accent/40 hover:border-ring/40"
              : "flex h-28 items-center justify-center rounded-2xl border border-border bg-card transition-colors hover:bg-accent/40 hover:border-ring/40"
          }
        >
          <div
            className="h-10 w-32 rounded bg-muted-foreground/15"
            aria-label={vendor.name}
          />
        </div>
      ))}
    </div>
  )
}
