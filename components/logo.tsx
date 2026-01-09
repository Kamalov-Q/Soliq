const Logo = ({ w, h }: { w?: number, h?: number }) => {
    return (
        <>
            {/* <Logo /> */}
            <img src={`/logo.png`} className={`w-${w ? w : '32'} h-${h ? h : '20'} rounded-full`} alt="Logo"  />
        </>
    )
}

export default Logo