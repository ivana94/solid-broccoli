import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        padding: 0.5rem 1rem;
        background: ${props => props.theme.pink};
        color: white;
        transform: uppercase;
        text-decoration: none;
    }

    @media (max-width: ${props => props.theme.laptop}) {
        margin: 0;
        text-align: center;
    }
`;

const StyledHeader = styled.header`
    .bar {
        border-bottom: 10px solid ${props => props.theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;

        @media (max-width: ${props => props.theme.laptop}) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }
    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto; 
        border-bottom: 1px solid ${props => props.theme.lightgray};
    }
`;

const Header = () => (
    <StyledHeader>
        <div className='bar'>
            <Logo>
                <Link href='/'>
                    <a>solid broccoli</a>
                </Link>
            </Logo>
            <Nav />
        </div>
        <div className='sub-bar'>
            <p>search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
);

export default Header;