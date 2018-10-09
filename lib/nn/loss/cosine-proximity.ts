import Loss from './';
import Vector from '../../vector';

/**
 * Cosine Proximity
 */
class CosineProximity extends Loss
{
	calculate( yHat : Vector, y : Vector ) : number
	{
		// -sum( y * yHat ) / ( sqrt( sum( y ^ 2 ) ) * sqrt( sum( yHat ^ 2 ) ) )

		const dividend	= y.mul( yHat ).sum(),
			divisor		= Math.sqrt( y.pow( 2 ).sum() ) * Math.sqrt( yHat.pow( 2 ).sum() );

		return -dividend / divisor;
	}
}


export default CosineProximity;