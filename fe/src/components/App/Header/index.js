import { Container } from '../styles';
import logo from '../../../assets/images/logo.svg';
import { InputSearchContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201" />
      <InputSearchContainer>
        <input type="text" />
      </InputSearchContainer>
    </Container>
  );
}
