
import { ReactNode } from 'react';
import { Header } from '../../components/Header';
import { SidBarItem } from '../SidbarItem';
import { useForm } from '../../contexts/FormContext';
import * as S from './styles';

type Props = {
  children: ReactNode;
}

export const Theme = ({ children }: Props) => {
  const { state } = useForm();
  return (
    <S.Container>
      <S.Area>
        <Header />

        <S.Steps>
          <S.Sidebar>
            <SidBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />
            <SidBarItem
              title="Profissional"
              description="Se nível"
              icon="book"
              path="/step-two"
              active={state.currentStep === 2}
            />
            <SidBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/step-thre"
              active={state.currentStep === 3}
            />
          </S.Sidebar>
          <S.Page>
            {children}
          </S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
}