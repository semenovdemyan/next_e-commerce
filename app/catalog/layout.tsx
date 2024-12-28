import CatalogLayout from '../../components/layouts/CatalogLayout'

export const metadata = {
  title: 'Сытый\u00A0моряк | Ассортимент',
}

export default function ComparisonRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CatalogLayout>{children}</CatalogLayout>
}
