module examples/functions-example

imports

	examples/relations-example
	
signatures

	Dim : INT -> Dim

type functions

	create-array-type :
		([_, Dim(_)|ds], ty) -> ArrayType(inner-ty)
  	where <create-array-type> (ds, ty) => inner-ty

	create-array-type :  
  	([_], ty) -> ArrayType(ty)

type functions

	promote-bin :
		(x-ty, y-ty) -> prom-ty
		where ((x-ty == Double() or y-ty == Double()) and Double() => prom-ty)
		   or ((x-ty == Float() or y-ty == Float()) and Float() => prom-ty)
		   or ((x-ty == Long() or y-ty == Long()) and Long() => prom-ty)
		   or Int() => prom-ty

	promote-un :
		ty -> prom-ty
		where ((ty == Byte() or ty == Short() or ty == Char()) and Int() => prom-ty)
		   or ty => prom-ty
