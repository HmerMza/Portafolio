import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

const CompCard = ({ datos }) => {
  const { img, nombre, escuela, logoE, credencial } = datos;

  return (
    <div className="my-4">
      <Card
        isFooterBlurred
        className="w-[420px] h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={img}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src={logoE}
            />
            <div className="flex flex-col">
              <p className="text-lg text-white">{`${nombre} - ${escuela}`}</p>
            </div>
          </div>
          <Button radius="full" size="sm" color="secondary">
            <Link href={credencial} target="_blank" color="foreground">
              Ver Credenciales
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CompCard;
