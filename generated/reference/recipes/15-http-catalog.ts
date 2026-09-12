// PoeBane integration. Set your endpoint before enabling the rule.
const CATALOG_URL = "";
OnTimer(60_000).If(() => CATALOG_URL.length > 0).Do(async () => {
  try {
    await catalog.Refresh(CATALOG_URL);
    Log(`Catalog refreshed: ${catalog.Prices.size} prices`);
  } catch (error) {
    Warn(`Catalog unavailable: ${String(error)}`);
  }
});

// Application logic. Example payload: { "prices": { "Chaos Orb": 1.5 } }.
class PriceCatalog {
  Prices = new Map<string, number>();

  async Refresh(url: string): Promise<void> {
    // Clear stale values on failure rather than treating them as fresh prices.
    this.Prices.clear();
    const response = await fetch(url);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`HTTP ${response.status}`);
    }
    const payload: unknown = await response.json();
    if (typeof payload !== "object" || payload === null || !("prices" in payload)
        || typeof payload.prices !== "object" || payload.prices === null
        || Array.isArray(payload.prices)) {
      throw new Error("Expected a prices object");
    }
    const prices = new Map<string, number>();
    for (const [name, price] of Object.entries(payload.prices)) {
      if (typeof price !== "number" || !Number.isFinite(price) || price < 0) {
        throw new Error(`Invalid price for ${name}`);
      }
      prices.set(name, price);
    }
    this.Prices = prices;
  }
}
const catalog = new PriceCatalog();
