import axios from './axios'
import type { AxiosError, AxiosResponse } from 'axios'
import type { IDocument } from '@models/index'

export const getDocuments = async (search: string | null) => {
  try {
    const params: { [key: string]: string } = {}
    if (search) params.search = search

    const documents: AxiosResponse<IDocument[]> = await axios({
      method: 'GET',
      url: '/user/docs',
      params
    })
    return documents.data
  } catch (err) {
    console.error(err)
    throw (err as AxiosError).message
  }
}
