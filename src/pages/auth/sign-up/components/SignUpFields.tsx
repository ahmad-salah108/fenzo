import React, { useRef, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Controller, useFormContext } from "react-hook-form";

export default function SignUpFields({
  image,
  setImage
}: {
  image: any | null,
  setImage: React.Dispatch<any>
}) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null)
  const {
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography mb={1}>{t("profile_picture")}*</Typography>
        <Stack
          sx={{
            background: "rgba(246, 246, 246, 1)",
            padding: "1rem",
            borderRadius: "10px",
            width: "200px",
            height: "200px",
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}
        >
          {image ? <img src={image && URL.createObjectURL(image)} style={{objectFit: 'contain', width: '100%', height: '100%', cursor: 'pointer'}} onClick={()=>{fileInputRef.current?.click()}}/> : <>
          <img src='/assets/icons/cloud.svg'/>
          <Button variant="contained" onClick={()=>{fileInputRef.current?.click()}}>{t('upload_photo')}</Button>
          </>}
        </Stack>
      </Box>
      <input ref={fileInputRef} type="file" style={{display: 'none'}} onChange={(e)=>{setImage(e.target.files?.[0])}}/>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("full_name")}*</Typography>
        <Controller
          name="full_name"
          control={control}
          defaultValue={""}
          rules={{ required: t("full_name_required") }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors?.full_name}
              helperText={errors?.full_name?.message as string}
              placeholder={t("full_name")}
              fullWidth
              variant="standard"
              sx={{ "& input": { height: "2rem" } }}
            />
          )}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("phone_number")}*</Typography>
        <Controller
          name="phone_number"
          control={control}
          defaultValue={""}
          rules={{ required: t("phone_number_required") }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors?.phone_number}
              helperText={errors?.phone_number?.message as string}
              placeholder={t("phone_number")}
              fullWidth
              variant="standard"
              onChange={(e) => {
                if (!isNaN(+e.target.value)) {
                  field.onChange(e.target.value?.replace(".", ""));
                }
              }}
              sx={{ "& input": { height: "2rem" } }}
            />
          )}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("email")}*</Typography>
        <Controller
          name="email"
          control={control}
          defaultValue={""}
          rules={{ required: t("email_required") }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors?.email}
              helperText={errors?.email?.message as string}
              placeholder={t("email")}
              fullWidth
              variant="standard"
              type="email"
              sx={{ "& input": { height: "2rem" } }}
            />
          )}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("age")}*</Typography>
        <Controller
          name="age"
          control={control}
          defaultValue={""}
          rules={{ required: t("age_required") }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors?.age}
              helperText={errors?.age?.message as string}
              placeholder={t("age")}
              fullWidth
              variant="standard"
              onChange={(e) => {
                if (!isNaN(+e.target.value)) {
                  field.onChange(e.target.value?.replace(".", ""));
                }
              }}
              sx={{ "& input": { height: "2rem" } }}
            />
          )}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("country")}*</Typography>
        <Controller
          name="country"
          control={control}
          defaultValue={""}
          rules={{ required: t("country_required") }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors?.country}
              helperText={errors?.country?.message as string}
              placeholder={t("country")}
              fullWidth
              variant="standard"
              sx={{ "& input": { height: "2rem" } }}
            />
          )}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("password")}*</Typography>
        <Controller
          name="password"
          control={control}
          defaultValue={""}
          rules={{ required: t("password_required") }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors?.password}
              helperText={errors?.password?.message as string}
              placeholder={t("password")}
              fullWidth
              variant="standard"
              type={showPassword ? "text" : "password"}
              sx={{ "& input": { height: "2rem" } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setShowPassword((prev) => !prev);
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Typography>{t("confirm_password")}*</Typography>
        <Controller
          name="confirm_password"
          control={control}
          defaultValue={""}
          rules={{
            required: t("confirm_password_required"),
            validate: (value) => {
              if (watch("password") != value) {
                return t("password_mismatch");
              }
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors?.confirm_password}
              helperText={errors?.confirm_password?.message as string}
              placeholder={t("confirm_password")}
              fullWidth
              variant="standard"
              type={showPassword2 ? "text" : "password"}
              sx={{ "& input": { height: "2rem" } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setShowPassword2((prev) => !prev);
                      }}
                    >
                      {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
}
