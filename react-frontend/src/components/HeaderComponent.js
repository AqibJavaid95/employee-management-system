import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'> {/* uses bootstrap css for some styling */}
                    <div>
                        <a href = "https://codeclan.com" className='navbar-brand'>
                            Employee Management Application
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent