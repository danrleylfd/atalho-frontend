import api from "../services"

const refreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken")
  if (!refreshToken) return { error: "Refresh Token is invalid." }
  const { data } =  await api.post("/auth/refresh_token", { refreshToken: `Bearer ${refreshToken}` })
  return data
}

export default refreshToken
