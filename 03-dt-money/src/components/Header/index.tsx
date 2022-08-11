import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleChangeModal() {
    setIsModalOpen((state) => !state)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={isModalOpen} onOpenChange={handleChangeModal}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal handleChangeModal={handleChangeModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
