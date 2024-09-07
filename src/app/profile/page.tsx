'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Skeleton, IconButton } from '@mui/material'
import CustomButton from '@/components/Button'
import { useRouter } from 'next/navigation'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Profile = () => {
  const [userData, setUserData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [nextLoading, setNextLoading] = useState(false)
  const router = useRouter() 

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/')
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
    fetchUserData()
  }, [])

  const handleNextUser = () => {
    setNextLoading(true)
    fetchUserData() 
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="absolute top-4 left-4">
        <IconButton onClick={() => router.back()} className="text-gray-500">
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          {loading || nextLoading ? (
            <>
              <Skeleton variant="circular" width={128} height={128} />
              <Skeleton variant="text" width="60%" height={32} className="mt-4" />
              <Skeleton variant="text" width="80%" height={24} className="mt-2" />
              <Skeleton variant="text" width="70%" height={24} className="mt-2" />
              <Skeleton variant="text" width="50%" height={24} className="mt-2" />
            </>
          ) : (
            <>
              <img
                src={userData.picture.large}
                alt="Foto do perfil"
                className="rounded-full w-32 h-32 mb-4 shadow-md"
              />
              <h2 className="text-2xl font-extrabold text-gray-700">
                {userData.name.first} {userData.name.last}
              </h2>
              <p className="mt-2 text-sm text-gray-500">E-mail: {userData.email}</p>
              <p className="mt-2 text-sm text-gray-500">
                Localização: {userData.location.city}, {userData.location.country}
              </p>
              <p className="mt-2 text-sm text-gray-500">Telefone: {userData.phone}</p>

              <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner w-full">
                <h3 className="text-lg font-bold text-gray-700">Informações de Saúde</h3>
                <p className="text-sm text-gray-600">Última consulta: 20/08/2023</p>
                <p className="text-sm text-gray-600">Vacinas: Completa</p>
                <p className="text-sm text-gray-600">Medicação atual: Nenhuma</p>
              </div>

              <CustomButton
                className="mt-6 bg-gradient-to-r from-teal-500 to-green-500 text-white"
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
