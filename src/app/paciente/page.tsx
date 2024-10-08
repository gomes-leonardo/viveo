/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import axios from 'axios'
import { Skeleton, IconButton, Tooltip } from '@mui/material'
import GetAppIcon from '@mui/icons-material/GetApp'
import LogoutIcon from '@mui/icons-material/Logout'
import CustomButton from '@/components/Button'
import {
  exportToCSV,
  getRandomDate,
  getRandomMedication,
  getRandomVaccines,
} from '@/utils/patient'

const Profile = () => {
  const [userData, setUserData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [nextLoading, setNextLoading] = useState(false)
  const [authVerifying, setAuthVerifying] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const isLoggedInSessionStorage = sessionStorage.getItem('isLoggedIn')
    const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn')

    if (!isLoggedInSessionStorage && !isLoggedInLocalStorage) {
      setAuthVerifying(false)
      router.push('/login')
    } else {
      setAuthVerifying(false)
    }
  }, [router])

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/')
      document.title = `Viveo • Ficha de ${response.data.results[0].name.first}`
      setUserData(response.data.results[0])
      setLoading(false)
      setNextLoading(false)
    } catch (error) {
      console.error('Erro ao buscar dados do usuário', error)
      setLoading(false)
      setNextLoading(false)
    }
  }

  useEffect(() => {
    if (!authVerifying) {
      fetchUserData()
    }
  }, [authVerifying])

  const handleNextUser = () => {
    setNextLoading(true)
    fetchUserData()
  }

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('email')
    router.push('/login')
  }

  if (authVerifying || loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
        <Skeleton variant="rectangular" width="100%" height={400} />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <Tooltip title="Exportar para CSV">
          <button
            onClick={() => exportToCSV(userData)}
            className="absolute top-4 right-4 bg-gradient-to-r from-teal-400 to-green-400 hover:from-teal-500 hover:to-green-500 text-white text-xs font-semibold py-1 px-3 rounded-lg shadow-md flex items-center space-x-2 transition duration-300 ease-in-out"
          >
            <GetAppIcon style={{ fontSize: '20px' }} />
          </button>
        </Tooltip>

        <Tooltip title="Sair">
          <IconButton
            onClick={handleLogout}
            className="absolute top-4 left-4 bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white text-xs font-semibold py-1 px-3 rounded-lg shadow-md flex items-center space-x-2 transition duration-300 ease-in-out"
          >
            <LogoutIcon fontSize="large" style={{ fontSize: '20px' }} />
          </IconButton>
        </Tooltip>

        <div className="flex flex-col items-center">
          {nextLoading ? (
            <>
              <Skeleton variant="circular" width={128} height={128} />
              <Skeleton
                variant="text"
                width="60%"
                height={32}
                className="mt-4"
              />
              <Skeleton
                variant="text"
                width="80%"
                height={24}
                className="mt-2"
              />
              <Skeleton
                variant="text"
                width="70%"
                height={24}
                className="mt-2"
              />
              <Skeleton
                variant="text"
                width="50%"
                height={24}
                className="mt-2"
              />
            </>
          ) : (
            <>
              <Image
                width={200}
                height={100}
                src={userData.picture.large}
                alt="Foto do perfil"
                className="rounded-full w-32 h-32 mb-4 shadow-md"
              />
              <h2 className="text-2xl font-extrabold text-gray-700 mb-2">
                {userData.name.first} {userData.name.last}
              </h2>
              <p className="mt-2 text-sm text-gray-500 mb-1">
                E-mail: {userData.email}
              </p>
              <p className="mt-2 text-sm text-gray-500 mb-1">
                Localização: {userData.location.city},{' '}
                {userData.location.country}
              </p>
              <p className="mt-2 text-sm text-gray-500 mb-2">
                Telefone: {userData.phone}
              </p>

              <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner w-full space-y-2">
                <h3 className="text-lg font-bold text-gray-700 mb-2">
                  Informações de Saúde
                </h3>
                <p className="text-sm text-gray-600">
                  Última consulta: {getRandomDate()}
                </p>
                <p className="text-sm text-gray-600">
                  Vacinas: {getRandomVaccines()}
                </p>
                <p className="text-sm text-gray-600">
                  Medicação atual: {getRandomMedication()}
                </p>
              </div>

              <CustomButton
                className="mt-6 bg-gradient-to-r from-teal-500 to-green-500 text-white w-full py-2"
                title="Próximo Paciente"
                onClick={handleNextUser}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
