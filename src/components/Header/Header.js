import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">Logo</div>
                    <div className="col-md-10 header-container d-flex justify-content-end">
                        <li className='item me-4 p-2'>Home</li>
                        <li className='item me-4 p-2'>Contact</li>
                        <li className='item me-4 p-2'>Cart</li>
                        <li className='item me-4 p-2'>Login</li>
                        <li className='item me-4 p-2'>Singin</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;