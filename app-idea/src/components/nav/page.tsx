import ButtonMain from '@/components/buttons/main-buttons/page';

export default function Navigation() {
    return (
        <nav className="w-screen h-[90px] absolute top-0 left-0 px-[5%] lg:px-[10%]">
            <div className="content flex flex-row justify-between">
                <div className="h-full flex items-center">
                    <ButtonMain>+ Create New Task</ButtonMain>
                </div>
            </div>
        </nav>
    )
}