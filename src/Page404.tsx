import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Page404() {
  const { t } = useTranslation();

  return (
    <h1 style={{ textAlign: "center", padding: "250px 0" }}>
      404 | {t("page_not_found")}
    </h1>
  )
}
