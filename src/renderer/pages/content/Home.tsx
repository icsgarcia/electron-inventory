import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Home = () => {
  return (
    <div className="container">
      <div className="flex justify-between gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>0 Users</CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader >
            <CardTitle>Tools</CardTitle>
            <CardDescription>0 Tools</CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>0 Open Transactions</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default Home