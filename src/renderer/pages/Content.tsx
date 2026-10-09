import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Users from './content/Users'
import Tools from './content/Tools'
import Transactions from './content/Transactions'
import AboutUs from './content/AboutUs'
import Home from './content/Home'

const Content = () => {
    return (
        <div>
            <Tabs defaultValue="home">
                <TabsList variant={'line'} className="w-full justify-center">
                    <TabsTrigger value="home">Home</TabsTrigger>
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
                    <TabsTrigger value="about-us">About</TabsTrigger>
                </TabsList>
                <TabsContent value="home"><Home /></TabsContent>
                <TabsContent value="users"><Users /></TabsContent>
                <TabsContent value="tools"><Tools /></TabsContent>
                <TabsContent value="transactions"><Transactions /></TabsContent>
                <TabsContent value="about-us"><AboutUs /></TabsContent>
            </Tabs>
        </div>
    )
}

export default Content