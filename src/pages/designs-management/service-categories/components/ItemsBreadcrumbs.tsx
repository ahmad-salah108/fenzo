import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { t } from "i18next";
import { useParams } from "react-router";

export default function ItemsBreadcrumbs() {
  const { designId, packageId } = useParams();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/designs">
        {t("designs")}
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href={`/designs/${designId}`}
      >
        {t('design_details')}
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href={`/designs/${designId}/${packageId}`}
      >
        {t('package')}
      </Link>
      <Typography color="primary">{t('categories')}</Typography>
    </Breadcrumbs>
  );
}
